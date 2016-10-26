/**
 * Created by marius on 20/10/2016.
 */
import * as graphqlHTTP from 'express-graphql';
import * as express from 'express';

import {schema} from "./schema";

export class GraphqlRoutes {
  static init(app: express.Application) {
    app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: {},
      graphiql: true
    }));
  }
}
