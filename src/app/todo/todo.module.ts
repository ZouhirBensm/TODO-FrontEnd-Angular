import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,

  ]
})
export class TodoModule { }
