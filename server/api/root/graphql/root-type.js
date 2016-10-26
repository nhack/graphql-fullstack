"use strict";
/**
 * Created by marius on 23/10/2016.
 */
var test_type_1 = require("../../test/graphql/test-type");
var todo_type_1 = require("../../todo/graphql/todo-type");
var RootType = {
    def: "\n    type Query implements TodoQuery, TestQuery{\n      todos: [Todo]\n      tests: [String]\n    }\n    type Mutation implements TodoMutation{\n      createTodo(todoMessage: String!): Todo\n      deleteTodo(_id: ID!): Todo\n    }\n  ",
    dependencies: [todo_type_1.default, test_type_1.default]
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootType;
//# sourceMappingURL=root-type.js.map