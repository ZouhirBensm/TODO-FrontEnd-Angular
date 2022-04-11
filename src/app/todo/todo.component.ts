import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  displayedColumns: string[] = ['id',  'title', 'actions'];
  dataSource  = [];
  todo = {};

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(data => {
      console.log("reading", data.search)
      const search = data.search
      this.refresh(search)
    })
  }

  ngOnInit() {
    this.refresh()
  }

  refresh(search? : string){
    this.apiService.readTodos(search).subscribe((result) => {
      console.log("to filter: ", result)
      this.dataSource = result.filter((todo) => {
        return todo.status !== 5
      });
    });
  }

  // selectTodo(todo) {
  //   this.todo = todo;
  // }

  // newTodo() {
  //   this.todo = {};
  // }

  createTodo(f) {
    console.log("What is f? ", f.value)
    f.value.date_cr = new Date()
    f.value.status = 1
    console.log("here!", f.value.date_dn, f.value.date_cr);
    this.apiService.createTodo(f.value).subscribe((result) => {
      // if(error) console.error("HERE", error)
      console.log("here!", result);
      this.dataSource.push(result)
      this.dataSource = [...this.dataSource]
    });
  }

  deleteTodo(id) {
    this.apiService.deleteTodo(id).subscribe((result) => {
      console.log(result);
      // this.refresh()
      this.dataSource = this.dataSource.filter(t => t.id !== id)
    });
  }

  goTo(id) {
    console.log(id)
    this.router.navigate([`/${id}`]);
  }

  search(f) {
    console.log(f.value.search)
    f.value.search? this.router.navigate(['/'], { queryParams: { search: f.value.search } }): this.router.navigate(['/'])
  }

  changeToDone(f) {
    console.log("Done!", f)
    this.apiService.changeToDone(f).subscribe((result) => {
      console.log(result);
      this.refresh()
      // this.dataSource = this.dataSource.map(t => console.log(t))
    });
  }

  // updateTodo(f) {
  //   // tslint:disable-next-line:no-string-literal
  //   f.value.id = this.todo['id'];
  //   this.apiService.updateTodo(f.value).subscribe((result) => {
  //     console.log(result);
  //   });
  // }

}
