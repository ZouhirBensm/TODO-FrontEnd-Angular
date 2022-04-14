import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';
import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatPaginatorModule, MatPaginator } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [{ path: '', component: DetailComponent }];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
    //   HttpClientModule,
    //   FormsModule,
    //   BrowserAnimationsModule,
    //   MatInputModule,
    //   MatButtonModule,
    //   MatCardModule,
    //   MatFormFieldModule,
    //   MatTableModule,
    //   MatDatepickerModule,
    //   MatNativeDateModule,
    //   MatSelectModule,
    //   MatPaginatorModule
    ],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
