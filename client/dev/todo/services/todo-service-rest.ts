import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Http,
  Headers,
  Response
} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {TodoService} from "./todo-service";
import {Todo} from "../domain/todo";

@Injectable()
export class TodoServiceRest implements TodoService {
  static ENDPOINT: string = '/api/todos/:id';

  constructor(@Inject(Http) private _http: Http) {
  }

  getAll(): Promise<Array<Todo>> {
    return this._http
      .get(TodoServiceRest.ENDPOINT.replace(':id', ''))
      .map((r) => r.json())
      .toPromise();
  }

  add(message: string): Promise<Todo> {
    let _messageStringified = JSON.stringify({todoMessage: message});

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
      .post(TodoServiceRest.ENDPOINT.replace(':id', ''), _messageStringified, {headers})
      .map((r: Response) => r.json())
      .toPromise();
  }

  remove(id: string): Promise<any> {
    return this._http
      .delete(TodoServiceRest.ENDPOINT.replace(':id', id))
      .toPromise();
  }
}
