/**
 * Created by marius on 24/10/2016.
 */
import {makeExecutableSchema} from "graphql-tools";

import RootType from "../root/graphql/root-type";
import {DependenciesResolver} from "../../commons/graphql/types/graphql-dependencies-resolver";

export const schema = makeExecutableSchema({
  typeDefs: DependenciesResolver.defs(RootType),
  resolvers: DependenciesResolver.resolvers(RootType)
});
