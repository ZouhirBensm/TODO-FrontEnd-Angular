import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KPIComponent } from './kpi.component';

const routes: Routes = [{ path: '', component: KPIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KPIRoutingModule { }
