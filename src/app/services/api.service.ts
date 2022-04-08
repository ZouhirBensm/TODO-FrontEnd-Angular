import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = 'http://localhost:3001';

  constructor(private httpClient: HttpClient) { }

  public readTodos() {
    return this.httpClient.get<Todo[]>(`${this.API_SERVER}/todos`);
  }

  public createTodo(todo: Todo) {
    return this.httpClient.post<Todo>(`${this.API_SERVER}/todos/create`, todo);
  }

  // public updateTodo(todo: Todo) {
  //   return this.httpClient.put<Todo>(`${this.API_SERVER}/todos/${todo.id}/update`, todo);
  // }

  // public deleteTodo(id: number) {
  //   return this.httpClient.delete(`${this.API_SERVER}/todos/${id}/delete`);
  // }

}
