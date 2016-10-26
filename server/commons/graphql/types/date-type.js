"use strict";
/**
 * Created by marius on 21/10/2016.
 */
var graphql_1 = require('graphql');
var DateType = {
    def: 'scalar Date',
    resolvers: {
        Date: {
            __parseValue: function (value) {
                return new Date(value); // value from the client
            },
            __serialize: function (value) {
                return value.getTime(); // value sent to the client
            },
            __parseLiteral: function (ast) {
                if (ast.kind === graphql_1.Kind.INT) {
                    return parseInt(ast.value, 10); // ast value is always in string format
                }
                return null;
            }
        }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DateType;
//# sourceMappingURL=date-type.js.map