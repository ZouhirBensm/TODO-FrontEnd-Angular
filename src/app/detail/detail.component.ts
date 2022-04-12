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
  dataSource: {}
  id: string
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  public orderByKey(a, b) {
    return a.key;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)

    this.apiService.readTodo(Number(this.id)).subscribe((result) => {
      console.log("result", result)
      this.dataSource = result[0];
      console.log("datasource", this.dataSource)
    });
  }



}
