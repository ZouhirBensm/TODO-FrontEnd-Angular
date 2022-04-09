import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  displayedColumns: string[] = ['id',  'title', 'actions'];
  dataSource  = [];
  todo = {};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readTodos().subscribe((result) => {
    this.dataSource  =  result;
    });
  }

  refresh(){
    this.apiService.readTodos().subscribe((result) => {
      this.dataSource  =  result;
    });
  }

  // selectTodo(todo) {
  //   this.todo = todo;
  // }

  // newTodo() {
  //   this.todo = {};
  // }

  createTodo(f) {
    f.value.date_cr = new Date()
    f.value.status = 1
    console.log("here!", f.value.date_dn, f.value.date_cr);
    this.apiService.createTodo(f.value).subscribe((result) => {
      // if(error) console.error("HERE", error)
      console.log("here!", result);
      this.refresh()
    });
  }

  deleteTodo(id) {
    this.apiService.deleteTodo(id).subscribe((result) => {
      console.log(result);
      this.refresh()
    });
  }

  goTo(id) {
    console.log(id)
  }

  // updateTodo(f) {
  //   // tslint:disable-next-line:no-string-literal
  //   f.value.id = this.todo['id'];
  //   this.apiService.updateTodo(f.value).subscribe((result) => {
  //     console.log(result);
  //   });
  // }

}
