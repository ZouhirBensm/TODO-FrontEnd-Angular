import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  displayedColumns: string[] = ['id',  'title', 'actions'];
  dataSource  = [];
  todo = {};

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.refresh()
  }

  refresh(search? : string){
    this.apiService.readTodos(search).subscribe((result) => {
      console.log("to filter: ", result)
      this.dataSource = result.filter((todo) => {
        return todo.status === 5
      });
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

}
