"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by marius on 23/10/2016.
 */
var core_1 = require("@angular/core");
var angular2_apollo_1 = require("angular2-apollo");
var graphql_query_1 = require("../../common/graphql-query");
//noinspection TypeScriptCheckImport
var todoQueries = require('../domain/todoQueries.graphql!text');
var TodoServiceGraphql = (function () {
    function TodoServiceGraphql(_apollo) {
        this._apollo = _apollo;
        this._queries = new graphql_query_1.GraphqlQuery(todoQueries);
    }
    TodoServiceGraphql.prototype.getAll = function () {
        return this._apollo.query({
            query: this._queries.query('GetAllTodos')
        }).then(function (_a) {
            var data = _a.data;
            return data.todos;
        });
    };
    TodoServiceGraphql.prototype.add = function (message) {
        return this._apollo.mutate(({
            mutation: this._queries.mutation('AddTodo'),
            variables: { message: message }
        })).then(function (_a) {
            var data = _a.data;
            return data.createTodo;
        });
    };
    TodoServiceGraphql.prototype.remove = function (id) {
        return this._apollo.mutate(({
            mutation: this._queries.mutation('RemoveTodo'),
            variables: { id: id }
        })).then(function (_a) {
            var data = _a.data;
            return data.deleteTodo;
        });
    };
    TodoServiceGraphql = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_apollo_1.Angular2Apollo])
    ], TodoServiceGraphql);
    return TodoServiceGraphql;
}());
exports.TodoServiceGraphql = TodoServiceGraphql;
//# sourceMappingURL=todo-service-graphql.js.map