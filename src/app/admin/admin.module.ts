import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TeacherComponent,
    BookingListComponent,
    TransactionListComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
