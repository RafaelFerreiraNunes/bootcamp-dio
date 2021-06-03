import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import Stock from '../../shared/models/stock.model';

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardpageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void>{

    this.stocks = await this.dashboardService.getStocks();
    }

}
