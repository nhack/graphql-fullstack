"use strict";
/**
 * Created by marius on 20/10/2016.
 */
var graphqlHTTP = require('express-graphql');
var schema_1 = require("./schema");
var GraphqlRoutes = (function () {
    function GraphqlRoutes() {
    }
    GraphqlRoutes.init = function (app) {
        app.use('/graphql', graphqlHTTP({
            schema: schema_1.schema,
            rootValue: {},
            graphiql: true
        }));
    };
    return GraphqlRoutes;
}());
exports.GraphqlRoutes = GraphqlRoutes;
//# sourceMappingURL=routes.js.map