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
  todo: Todo
  id: string
  constructor(private apiService: ApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)

    this.apiService.readTodo(Number(this.id)).subscribe((result) => {
      console.log(result)
      this.todo = result[0];
      console.log(this.todo)
    });
  }



}
