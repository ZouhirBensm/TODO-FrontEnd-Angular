import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoneRoutingModule } from './done-routing.module';
import { DoneComponent } from './done.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    DoneComponent
  ],
  imports: [
    CommonModule,
    DoneRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class DoneModule { }
