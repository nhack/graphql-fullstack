"use strict";
/**
 * Created by marius on 24/10/2016.
 */
var graphql_tools_1 = require("graphql-tools");
var root_type_1 = require("../root/graphql/root-type");
var graphql_dependencies_resolver_1 = require("../../commons/graphql/types/graphql-dependencies-resolver");
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: graphql_dependencies_resolver_1.DependenciesResolver.defs(root_type_1.default),
    resolvers: graphql_dependencies_resolver_1.DependenciesResolver.resolvers(root_type_1.default)
});
//# sourceMappingURL=schema.js.map