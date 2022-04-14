import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
  ]
})
export class DetailModule { }
