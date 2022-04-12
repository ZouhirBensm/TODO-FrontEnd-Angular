import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  displayedColumns: string[] = ['key', 'value'];
  dataSource: Todo
  selection: Number;
  id: string
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  public orderByKey(a, b) {
    return a.key;
  }

  ngOnInit() {
    this.refresh()
  }
  
  refresh(){
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
  
    this.apiService.readTodo(Number(this.id)).subscribe((result) => {
      console.log("result", result)
      this.dataSource = result[0];
      console.log("datasource", this.dataSource)
    });
  }

  changeStatus() { 
    console.log(this.selection, typeof this.selection, this.dataSource)
    this.apiService.changeStatus(this.dataSource, Number(this.selection)).subscribe((result) => {
      console.log(result);
      this.refresh()
      // this.refresh()
      // this.dataSource = this.dataSource.map(t => console.log(t))
    });
  }
}
