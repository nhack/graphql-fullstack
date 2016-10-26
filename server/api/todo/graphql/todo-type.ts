/**
 * Created by marius on 23/10/2016.
 */
import TodoDAO from '../dao/todo-dao';
import DateType from "../../../commons/graphql/types/date-type";
import {TodoModel} from "../model/todo-model";
import {GraphqlType} from "../../../commons/graphql/types/graphql-type";

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

export default TodoType;
