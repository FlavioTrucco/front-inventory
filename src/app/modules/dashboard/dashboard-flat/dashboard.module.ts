import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFlatComponent } from '../pages/dashboard-flat/dashboard-flat.component';
import { HomeComponent } from '../components/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardFlatComponent,
    HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardFlatModule { }
