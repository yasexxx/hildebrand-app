import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.scss']
})
export class SalesTrafficChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public pieChartLabels: Label[] = ['Learning', 'Coding', 'Cycling', 'Running'];

  public pieChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81], label: 'Series A' },
    { data: [12, 53, 15, 1], label: 'Series A' }
  ];
  public pieChartType: ChartType = 'pie';


  constructor() { }

  ngOnInit() {
  }

}
