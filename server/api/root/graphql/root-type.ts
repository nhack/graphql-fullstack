/**
 * Created by marius on 23/10/2016.
 */
import TodoType from "../../todo/graphql/todo-type";
import {GraphqlType} from "../../../commons/graphql/types/graphql-type";

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

export default RootType;
