import * as express from 'express';
import {TodoRoutes} from '../api/todo/routes/todo-routes';

import {StaticDispatcher} from '../commons/static/index';
import {GraphqlRoutes} from "../api/graphql/routes";


export class Routes {
  static init(app: express.Application, router: express.Router) {
    TodoRoutes.init(router);
    GraphqlRoutes.init(app);

    router
      .route('*')
      .get(StaticDispatcher.sendIndex);

    app.use('/', router);
  }
}
