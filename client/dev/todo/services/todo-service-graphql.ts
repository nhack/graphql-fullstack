/**
 * Created by marius on 23/10/2016.
 */
import {Injectable} from "@angular/core";
import {Angular2Apollo} from "angular2-apollo";

import {GraphqlQuery} from "../../common/graphql-query";
import {TodoService} from "./todo-service";
import {Todo} from "../domain/todo";

//noinspection TypeScriptCheckImport
import * as todoQueries from '../domain/todoQueries.graphql!text';

@Injectable()
export class TodoServiceGraphql implements TodoService {

  constructor(private _apollo: Angular2Apollo) {
    this._queries = new GraphqlQuery(todoQueries);
  }

  getAll(): Promise<Array<Todo>> {
    return this._apollo.query({
      query: this._queries.query('GetAllTodos')
    }).then(({data})=>data.todos);
  }

  add(message: string): Promise<Todo> {
    return this._apollo.mutate(({
      mutation: this._queries.mutation('AddTodo'),
      variables: {message: message}
    })).then(({data})=>data.createTodo);
  }

  remove(id: string): Promise<any> {
    return this._apollo.mutate(({
      mutation: this._queries.mutation('RemoveTodo'),
      variables: {id: id}
    })).then(({data})=>data.deleteTodo);
  }

  private _queries: any;
}
