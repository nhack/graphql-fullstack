"use strict";
/**
 * Created by marius on 23/10/2016.
 */
var _ = require("lodash");
var DependenciesResolver = (function () {
    function DependenciesResolver() {
    }
    DependenciesResolver.defs = function (type) {
        var allTypes = DependenciesResolver.extractAllTypes(type);
        return allTypes.map(function (type) { return type.def; });
    };
    DependenciesResolver.resolvers = function (type) {
        var allTypes = DependenciesResolver.extractAllTypes(type);
        var resolvers = {};
        _.merge.apply(_, [resolvers].concat(allTypes.map(function (type) { return type.resolvers; })));
        return resolvers;
    };
    /**
     * Extract all the types starting from a root type by using BF dependency graph traversal
     *
     * @param type - the root type
     * @returns {GraphqlType[]} - all the dependencies
     */
    DependenciesResolver.extractAllTypes = function (type) {
        var types = [type];
        for (var idx = 0; idx < types.length; idx++) {
            var type = types[idx];
            if (type.dependencies) {
                type.dependencies.forEach(function (newType) {
                    // add the type only if it wasn't added before
                    if (!types.find(function (existingType) { return newType.def === existingType.def; })) {
                        types.push(newType);
                    }
                });
            }
        }
        return types;
    };
    return DependenciesResolver;
}());
exports.DependenciesResolver = DependenciesResolver;
//# sourceMappingURL=graphql-dependencies-resolver.js.map