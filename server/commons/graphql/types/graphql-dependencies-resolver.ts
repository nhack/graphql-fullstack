/**
 * Created by marius on 23/10/2016.
 */
import * as _ from "lodash";

import {GraphqlType} from "./graphql-type";

export class DependenciesResolver {

  static defs(type: GraphqlType): Array<string> {
    var allTypes: Array<GraphqlType> = DependenciesResolver.extractAllTypes(type);
    return allTypes.map(type => type.def);
  }

  static resolvers(type: GraphqlType): any {
    var allTypes: Array<GraphqlType> = DependenciesResolver.extractAllTypes(type);
    var resolvers = {};
    _.merge(resolvers, ...allTypes.map(type => type.resolvers));
    return resolvers;
  }

  /**
   * Extract all the types starting from a root type by using BF dependency graph traversal
   *
   * @param type - the root type
   * @returns {GraphqlType[]} - all the dependencies
   */
  private static extractAllTypes(type: GraphqlType): Array<GraphqlType> {
    var types = [type];

    for (var idx = 0; idx < types.length; idx++) {
      var type = types[idx];
      if (type.dependencies) {
        type.dependencies.forEach(newType=> {
          // add the type only if it wasn't added before
          if (!types.find(existingType=>newType.def === existingType.def)) {
            types.push(newType);
          }
        })
      }
    }
    return types;
  }
}
