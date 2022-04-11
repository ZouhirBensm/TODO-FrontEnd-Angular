import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DetailComponent } from './detail/detail.component';
import { DoneComponent } from './done/done.component';


const routes: Routes = [
  { path: 'done', component: DoneComponent },
  { path: '', component: TodoComponent },
  { path: ':id', component: DetailComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
