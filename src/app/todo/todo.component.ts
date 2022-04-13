import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  displayedColumns: string[] = ['id',  'title', 'actions'];
  dataSource  = [];
  todo = {};
  data_displayed = []
  
  //define global event variable to control page params, then update on the particular event
  event = {}
  
  reduce_index: number
  length_of_todos: number
  page_index: number
  page_size: number
  previous_page_index: number

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(data => {
      // console.log("reading", data.search)
      const search = data.search
      this.refresh(search)
    })
  }
  
  
  ngOnInit() {
    this.refresh()
    // this.event = {
    //   length: this.length_of_todos,
    //   pageIndex: 0,
    //   pageSize: 3,
    //   previousPageIndex: 0
    // }
    // console.log("ngOnInit ", this.event)
    this.reduce_index = 0
  }

  refresh(search? : string){
    this.apiService.readTodos(search).subscribe((result) => {
      // console.log("to filter: ", result)
      this.dataSource = result.filter((todo) => {
        return todo.status !== 5
      });
      this.length_of_todos = this.dataSource.length
      this.data_displayed = this.dataSource.slice(0,3)
      // console.log("Length of data that will be paginated", this.dataSource.length)
      // console.log("display", this.data_displayed)
    });

  }
  refresh2(search? : string){
    this.apiService.readTodos(search).subscribe((result) => {
      // console.log("to filter: ", result)
      this.dataSource = result.filter((todo) => {
        return todo.status !== 5
      });
      this.length_of_todos = this.dataSource.length
      // this.data_displayed = this.dataSource.slice(0,3)
      // console.log("Length of data that will be paginated", this.dataSource.length)
      // console.log("display", this.data_displayed)
      this.OnPageChange({
        length: this.length_of_todos,
        pageIndex: this.page_index,
        pageSize: this.page_size,
        previousPageIndex: this.previous_page_index
      })
    });

  }

  // selectTodo(todo) {
  //   this.todo = todo;
  // }

  // newTodo() {
  //   this.todo = {};
  // }

  createTodo(f) {
    // console.log("What is f? ", f.value)
    f.value.date_cr = new Date()
    f.value.status = 1
    // console.log("here!", f.value.date_dn, f.value.date_cr);
    this.apiService.createTodo(f.value).subscribe((result) => {
      // if(error) console.error("HERE", error)
      // console.log("here!", result);
      this.dataSource.push(result)
      // this.dataSource = [...this.dataSource]
      this.refresh2()
      // console.log("Length of data that will be paginated", this.dataSource.length)
      this.length_of_todos = this.dataSource.length
    });
  }

  deleteTodo(id) {
    this.apiService.deleteTodo(id).subscribe((result) => {
      // console.log(result);
      // this.refresh()
      this.dataSource = this.dataSource.filter(t => t.id !== id)
      this.length_of_todos = this.dataSource.length
      
      console.log(this.page_index)
      this.OnPageChange({
        length: this.length_of_todos,
        pageIndex: this.page_index,
        pageSize: this.page_size,
        previousPageIndex: this.previous_page_index
      })

      // console.log("Length of data that will be paginated", this.dataSource.length)
    });

  }

  goTo(id) {
    // console.log(id)
    this.router.navigate([`/${id}`]);
  }

  search(f) {
    // console.log(f.value.search)
    f.value.search? this.router.navigate(['/'], { queryParams: { search: f.value.search } }): this.router.navigate(['/'])
  }

  changeToDone(f) {
    // console.log("Done!", f)
    this.apiService.changeToDone(f).subscribe((result) => {
      // console.log(result);
      
      // define event and reduce one
      // this.OnPageChange(event)

      this.refresh2()
      
      // define event and reduce one
      // this.OnPageChange(event)
      
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

  OnPageChange(event: PageEvent){

    
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if(endIndex>this.length_of_todos){
      endIndex=this.length_of_todos
    }
    console.log(startIndex, endIndex, " Indexes")
    // Update the event
    // this.event = event

    this.data_displayed = this.dataSource.slice(startIndex,endIndex)
    // this.refresh()

    this.length_of_todos = event.length
    this.page_index = event.pageIndex
    this.page_size = event.pageSize
    this.previous_page_index = event.previousPageIndex

  }
}
