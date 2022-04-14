import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KPIRoutingModule } from './kpi-routing.module';
import { KPIComponent } from './kpi.component';


@NgModule({
  declarations: [KPIComponent],
  imports: [
    CommonModule,
    KPIRoutingModule
  ]
})
export class KPIModule { }
