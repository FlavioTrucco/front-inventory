import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFlatComponent } from '../pages/dashboard-flat/dashboard-flat.component';
import { HomeComponent } from '../components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    DashboardFlatComponent,
    HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardFlatModule { }
