import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, ChartColor } from 'chart.js';
import { Label } from 'ng2-charts';
import { SalesService } from './../../../../services/sales.service';

@Component({
  selector: 'app-annual-sales-chart',
  templateUrl: './annual-sales-chart.component.html',
  styleUrls: ['./annual-sales-chart.component.scss']
})
export class AnnualSalesChartComponent implements OnInit {

  public salesChartData: ChartDataSets [] = [
    {data: [], label: 'Total Sales' },
  ];

  public salesChartLabels: Label[] = [];
  public radarChartOptions: ChartOptions = {
    responsive: true,
  };

  public radarChartType: ChartType = 'line';

  public salesColor: ChartColor = [];
  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getSalesByMonth().subscribe({
      next: salesItems => {
        salesItems.forEach(li => {
          this.salesChartData[0].data.push(li.revenue);
          this.salesChartLabels.push(li.month);

        })
      }
    })
  }

}
