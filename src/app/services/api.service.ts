import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = 'http://localhost:3001';

  constructor(private httpClient: HttpClient) { }

  public readTodos(term? : string) {
    console.log("Before Api call", term)
    if (term) {
      return this.httpClient.get<Todo[]>(`${this.API_SERVER}?term=${term}`);
    } else {
      return this.httpClient.get<Todo[]>(`${this.API_SERVER}`);
    }
  }

  
  public readTodo(id: number) {
    return this.httpClient.get<Todo[]>(`${this.API_SERVER}/${id}`);
  }

  public createTodo(todo: Todo) {
    return this.httpClient.post<Todo>(`${this.API_SERVER}/create`, todo);
  }

  // public updateTodo(todo: Todo) {
  //   return this.httpClient.put<Todo>(`${this.API_SERVER}/todos/${todo.id}/update`, todo);
  // }

  public deleteTodo(id: number) {
    return this.httpClient.delete(`${this.API_SERVER}/${id}/delete`);
  }

  public changeToDone(todo: Todo) {
    return this.httpClient.put(`${this.API_SERVER}/${todo.id}/done`, todo);
  }

  public changeStatus(todo: Todo, status: Number) {
    return this.httpClient.put(`${this.API_SERVER}/${todo.id}/changestatus`, {todo: todo, status: status});
  }


}
