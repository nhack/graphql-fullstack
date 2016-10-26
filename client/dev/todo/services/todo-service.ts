/**
 * Created by marius on 22/10/2016.
 */

import {Todo} from "../domain/todo";
import {OpaqueToken} from "@angular/core";

export interface TodoService {
  getAll(): Promise<Array<Todo>>
  add(message: string): Promise<Todo>;
  remove(message: string): Promise<any>;
}

export let TODO_SERVICE = new OpaqueToken('app.todo.service');
