import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { StockCardComponent } from './stock-card/stock-card.component';



@NgModule({
  declarations: [
    DashboardpageComponent,
    StockCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    DashboardpageComponent,
  ]
})
export class DashboardModule { }
