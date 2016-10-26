"use strict";
/**
 * Created by marius on 25/10/2016.
 */
var graphql_tag_1 = require('graphql-tag');
var Document = (function () {
    function Document(definition) {
        this.kind = 'Document';
        this.definitions = [];
        this.definitions.push(definition);
    }
    return Document;
}());
var GraphqlQuery = (function () {
    function GraphqlQuery(query) {
        this.queryDocument = graphql_tag_1.default([query]);
    }
    GraphqlQuery.prototype.query = function (name) {
        return this.operation('query', name);
    };
    GraphqlQuery.prototype.mutation = function (name) {
        return this.operation('mutation', name);
    };
    GraphqlQuery.prototype.operation = function (operation, name) {
        if (name) {
            var definition = this.queryDocument.definitions.find(function (def) { return def.name.value === name && def.operation === operation; });
            if (definition) {
                return new Document(definition);
            }
            else {
                throw new Error('Unable to find ' + name.toUpperCase() + ' ' + operation);
            }
        }
        else {
            var definitions = this.queryDocument.definitions.find(function (def) { return def.operation === operation; });
            if (definitions.length == 1) {
                return new Document(this.queryDocument.definitions[0]);
            }
            else {
                throw new Error('There must be exactly one ' + operation + ' if no name is provided');
            }
        }
    };
    return GraphqlQuery;
}());
exports.GraphqlQuery = GraphqlQuery;
//# sourceMappingURL=graphql-query.js.map