import { OnlineOrderService } from './../../../../services/online-order.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.scss']
})
export class StoreSessionsChartComponent implements OnInit {

  public orderChartOptions: ChartOptions = {
    responsive: true,
  };
  public orderChartLabels: Label[] = [];

  public orderChartData: ChartDataSets[] = [{
    data: [], label: 'Total Orders'
  }];
  public orderChartType: ChartType = 'bar';

  constructor(private onlineOrderService:OnlineOrderService) { }

  ngOnInit() {
    this.onlineOrderService.getOrder().subscribe({
      next: orderItems => {
        orderItems.forEach( li => {
          this.orderChartData[0].data.push(li.orderTotal);
          this.orderChartLabels.push(li.name)
        })
      }
    })
  }

}
