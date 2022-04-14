import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KPIComponent implements OnInit {
  dataSource  = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.refresh()
  }

  refresh(){
    this.apiService.readTodos().subscribe((result) => {
      console.log(result)
      let done_day = 0,
      done_week = 0,
      done_month = 0

      let datetime_current = new Date(),
      datetime_minus_24h = new Date(new Date().getTime() - (24 * 60 * 60 * 1000)),
      datetime_minus_7d = new Date(new Date().getTime() - (7* 24 * 60 * 60 * 1000)),
      datetime_minus_30d = new Date(new Date().getTime() - (30* 24 * 60 * 60 * 1000))
      
      for(let i=0; i<result.length; i++){
        let datetime_todo = new Date(result[i].date_dn_clicked)
        done_day += this.Time_occurence_calculator(datetime_todo, datetime_minus_24h, datetime_current)
        done_week += this.Time_occurence_calculator(datetime_todo, datetime_minus_7d, datetime_current)
        done_month += this.Time_occurence_calculator(datetime_todo, datetime_minus_30d, datetime_current)
      }
      console.log("icit!", done_day, done_week, done_month)
      this.dataSource = [done_day, done_week, done_month]

    });
  }

  Time_occurence_calculator(datetime_todo, datetime_minus, datetime_current){
    // console.log(todo.date_dn_clicked, typeof todo.date_dn_clicked)
    // convert todo.date_dn_clicked to Date
    // get a: current date
    // get b: current date minus 24 hours
    // if the b<todo.date_dn_clicked data<a => increment 1
    // else => don't increment 1
    
    console.log(datetime_todo, "|", datetime_current, "|", datetime_minus, "\n" )

    if(datetime_minus<datetime_todo && datetime_todo<datetime_current){
      return 1
    } else {
      return 0
    }
  }

}
