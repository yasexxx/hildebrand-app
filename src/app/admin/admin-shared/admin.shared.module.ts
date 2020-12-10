import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSalesChartComponent } from '../admin-dashboard/charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from '../admin-dashboard/charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from '../admin-dashboard/charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from '../admin-dashboard/charts/store-sessions-chart/store-sessions-chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SalesService } from '../../services/product-sales.service';
import { CustomerService } from '../../services/customer.service';
import { ProductService } from '../../_services/update-product.service';
import { OnlineOrderService } from '../../services/online-order.service';
import { StoreSummaryService } from '../../services/store-summary.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OrderService } from '../../services/order.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        ProductSalesChartComponent,
        SalesTrafficChartComponent,
        AnnualSalesChartComponent,
        StoreSessionsChartComponent,
    ],
    imports: [ 
        CommonModule, 
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        ChartsModule,
        NgbModule ,
        MatProgressSpinnerModule
    ],
    exports: [
        ProductSalesChartComponent,
        SalesTrafficChartComponent,
        AnnualSalesChartComponent,
        StoreSessionsChartComponent,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        NgbModule
    ],
    providers: [
        SalesService,
        CustomerService ,
        ProductService ,
        OnlineOrderService,
        OrderService,
        StoreSummaryService,

    ]
})
export class AdminSharedModule {}