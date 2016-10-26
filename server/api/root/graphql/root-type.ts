/**
 * Created by marius on 23/10/2016.
 */
import TestType from "../../test/graphql/test-type";
import TodoType from "../../todo/graphql/todo-type";
import {GraphqlType} from "../../../commons/graphql/types/graphql-type";

const RootType: GraphqlType = {
  def: `
    type Query implements TodoQuery, TestQuery{
      todos: [Todo]
      tests: [String]
    }
    type Mutation implements TodoMutation{
      createTodo(todoMessage: String!): Todo
      deleteTodo(_id: ID!): Todo
    }
  `,
  dependencies: [TodoType, TestType]
};

export default RootType;
