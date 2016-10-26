import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {Todo} from "../domain/todo";
import {TODO_SERVICE, TodoService} from "../services/todo-service";

@Component({
  selector: 'todo-cmp',
  templateUrl: 'todo/templates/todo.html',
  styleUrls: ['todo/styles/todo.css']
})
export class TodoCmp implements OnInit {
  title: string = "ng2do";
  todos: Array<Todo> = [];
  todoForm: Todo;

  constructor(@Inject(TODO_SERVICE) private _todoService: TodoService) {
    this.todoForm = {
      "todoMessage": ""
    };
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll(): void {
    this._todoService
      .getAll()
      .then((todos) => {
        this.todos = todos;
      });
  }

  add(message: string): void {
    this._todoService
      .add(message)
      .then((todo) => {
        this.todos.push(todo);
        this.todoForm.todoMessage = "";
      });
  }

  remove(id: string): void {
    this._todoService
      .remove(id)
      .then(() => {
        this.todos.forEach((t, i) => {
          if (t._id === id)
            return this.todos.splice(i, 1);
        });
      })
  }
}
