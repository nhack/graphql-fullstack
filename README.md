# TODO Graphql
Classic TODO fullstack app with interchangeable backend: GraphQL or REST.
The application was created by using [`generator-ng-fullstack`](https://github.com/ericmdantas/generator-ng-fullstack) .
## Design Goals
The primary design goals were:

* transparent backend for the client
* a single source of queries for a certain type on the client
* modularity of the schema definition for the server

### Dependencies

In order to run the project you need [node with npm](https://nodejs.org/en/) and [mongodb](https://www.mongodb.com/) installed and running.
Then just run `npm install` and afterwards `npm start`. You can open the app at: http://localhost:3333

### The Client
The client was built so that you can easily change the backend from classical REST to Graphql.
In order to do this there should be dedicated implementations for the `TodoService`:

```typescript
export interface TodoService {
  getAll(): Promise<Array<Todo>>
  add(message: string): Promise<Todo>;
  remove(message: string): Promise<any>;
}

export let TODO_SERVICE = new OpaqueToken('app.todo.service');
```    
    
In the module you just have to configure the provider to use the backend that you like:

```typescript
@NgModule({
  providers: [
    {provide: TODO_SERVICE, useClass: TodoServiceGraphql}
  ]
})
export class AppModule {
}
```    

#### GraphQL implementation details
All the GraphQL queries for a certain type are stored in a single `.query` file: `todoQueries.graphql`. 
The `.query` file was loaded by using the [`systemjs-plugin-text`](https://github.com/systemjs/plugin-text). 
But loading text files with TypeScript it's tricky, that's why typing was needed in order to avoid compiling errors:

```typescript
declare module '*!text' {
  const _: string;
  export =  _;
}
```    

Still, WebStorm complains about the way the `.graphql` file was loaded, luckily the errors can be ignored by the IDE:

```typescript
//noinspection TypeScriptCheckImport
import * as todoQueries from '../domain/todoQueries.graphql!text';
```    

The communication with the server is made with the [`apollo-client`](https://github.com/apollostack/apollo-client), but this client can be configured to use a single query.
In order to choose which query to be executed, you have to instantiate the `GraphqlQuery` by passing the entire list of queries: `this._queries = new GraphqlQuery(todoQueries)`. 
Then you can call whatever query you like:
  
* `this._queries.query('GetAllTodos')`
* `this._queries.mutation('AddTodo')`

### The Server
The biggest challenge on the server was the modularization of the schema definitions, so that every type should have its definitions, resolvers and dependencies grouped together in a single file.
This can be modeled as a `GraphqlType`:

```typescript
export interface GraphqlType {
  def: string;
  resolvers?: any;
  dependencies?: Array<GraphqlType>;
}
```
    
And the first type that's missing when using GraphQL is the Date type:

```typescript
const DateType: GraphqlType = {
  def: 'scalar Date',
  resolvers: {
    Date: {
      __parseValue(value) {
        return new Date(value); // value from the client
      },
      __serialize(value) {
        return value.getTime(); // value sent to the client
      },
      __parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
      }
    }
  }
};
```    
    
Having the Date type the Todo type can be defined (which depends explicitly on the Date type):

```typescript
const TodoType: GraphqlType = {
  def: `
    type Todo {
      _id: ID!
      todoMessage: String
      createdAt: Date
    }
    interface TodoQuery{
       todos: [Todo]
    }
    interface TodoMutation {
      createTodo(todoMessage: String!): Todo
      deleteTodo(_id: ID!): Todo
    }
  `,
  resolvers: {
    Query: {
      todos: () => TodoDAO['getAll']()
    },
    Mutation: {
      createTodo: (_, todo: TodoModel) => TodoDAO['createTodo'](todo),
      deleteTodo: (_, todo: TodoModel) => TodoDAO['deleteTodo'](todo._id)
    }
  },
  dependencies: [DateType]
};
```    
    
Now the `Query` and the `Mutation` types of the `RootType` must implement the interfaces defined by the `TodoType`:

```typescript    
const RootType: GraphqlType = {
  def: `
    type Query implements TodoQuery{
      todos: [Todo]     
    }
    type Mutation implements TodoMutation{
      createTodo(todoMessage: String!): Todo
      deleteTodo(_id: ID!): Todo
    }
  `,
  dependencies: [TodoType]
};
```    
    
In the end when building the schema (by using `makeExecutableSchema` from [`graphql-tools`](https://github.com/apollostack/graphql-tools)) the dependencies are resolved by `DependenciesResolver`. 
`DependenciesResolver` traverses the dependency hierarchy of types and builds the entire type definitions and resolvers for our schema starting from the `RootType`.

### Future Work
I would like to change the module loading on the client side from SystemJS to Webpack somewhere in the near future.
