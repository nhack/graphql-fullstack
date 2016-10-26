"use strict";
var todo_routes_1 = require('../api/todo/routes/todo-routes');
var index_1 = require('../commons/static/index');
var routes_1 = require("../api/graphql/routes");
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_routes_1.TodoRoutes.init(router);
        routes_1.GraphqlRoutes.init(app);
        router
            .route('*')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map