import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TodoComponent } from './todo/todo.component';
// import { DetailComponent } from './detail/detail.component';
// import { DoneComponent } from './done/done.component';


// const routes: Routes = [
//   { path: 'done', component: DoneComponent },
//   { path: '', component: TodoComponent },
//   { path: ':id', component: DetailComponent },    
// ];

const routes: Routes = [
  { path: 'KPI', loadChildren: () => import('./kpi/kpi.module').then(m => m.KPIModule) },
  { path: '', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) }, 
  { path: 'done', loadChildren: () => import('./done/done.module').then(m => m.DoneModule) }, 
  { path: ':id', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }, 
  { path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
