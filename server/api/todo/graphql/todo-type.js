"use strict";
/**
 * Created by marius on 23/10/2016.
 */
var todo_dao_1 = require('../dao/todo-dao');
var date_type_1 = require("../../../commons/graphql/types/date-type");
var TodoType = {
    def: "\n    type Todo {\n      _id: ID!\n      todoMessage: String\n      createdAt: Date\n    }\n    interface TodoQuery{\n       todos: [Todo]\n    }\n    interface TodoMutation {\n      createTodo(todoMessage: String!): Todo\n      deleteTodo(_id: ID!): Todo\n    }\n  ",
    resolvers: {
        Query: {
            todos: function () { return todo_dao_1.default['getAll'](); }
        },
        Mutation: {
            createTodo: function (_, todo) { return todo_dao_1.default['createTodo'](todo); },
            deleteTodo: function (_, todo) { return todo_dao_1.default['deleteTodo'](todo._id); }
        }
    },
    dependencies: [date_type_1.default]
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoType;
//# sourceMappingURL=todo-type.js.map