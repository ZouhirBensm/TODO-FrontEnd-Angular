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
  todo = {};
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

  // changeStatus() { 
  //   console.log("selection: ", this.selection, typeof this.selection)
  //   console.log("datasource: ", this.dataSource)
  //   this.apiService.changeStatus(this.dataSource, Number(this.selection)).subscribe((result) => {
  //     console.log(result);
  //     this.refresh()
  //     // this.refresh()
  //     // this.dataSource = this.dataSource.map(t => console.log(t))
  //   });
  // }

  updateTodo(f){
    console.log("receiving! ", f.value, this.dataSource)
    f.value.id = this.dataSource.id
    if (f.value.title==undefined && f.value.status==undefined){
      console.log("undefined")
      return
    } else {
      console.log("ok")
      f.value.title = f.value.title? f.value.title: this.dataSource.title
      f.value.status = f.value.status? f.value.status: this.dataSource.status

      console.log(f.value.title, f.value.status, this.dataSource)
      this.apiService.changeStatusTitle(this.dataSource, f.value.status ,f.value.title).subscribe((result) => {
        console.log(result);
        this.refresh()
      });

    }

  }

  // updateTodo(f) {
  //   // tslint:disable-next-line:no-string-literal
  //   f.value.id = this.todo['id'];
  //   this.apiService.updateTodo(f.value).subscribe((result) => {
  //     console.log(result);
  //   });
  // }
}
