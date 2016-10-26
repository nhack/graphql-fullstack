import ApolloClient from 'apollo-client';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ApolloModule} from 'angular2-apollo';

import {TodoCmp}   from './todo/components/todo-cmp';
import {TODO_SERVICE} from "./todo/services/todo-service";
import {TodoServiceRest}   from './todo/services/todo-service-rest';
import {TodoServiceGraphql} from "./todo/services/todo-service-graphql";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApolloModule.withClient(new ApolloClient())
  ],
  declarations: [
    TodoCmp,
  ],
  providers: [
    {provide: TODO_SERVICE, useClass: TodoServiceGraphql}
  ],
  bootstrap: [
    TodoCmp,
  ],
})
export class AppModule {
}
