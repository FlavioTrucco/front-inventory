import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardFlatComponent } from './modules/dashboard/pages/dashboard-flat/dashboard-flat.component';
import { HomeComponent } from './modules/dashboard/components/home/home.component';
import { DashboardFlatModule } from './modules/dashboard/dashboard-flat/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardFlatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
