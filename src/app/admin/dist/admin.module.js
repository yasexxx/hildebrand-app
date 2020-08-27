"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var sortable_directives_1 = require("./../directives/sortable.directives");
var order_service_1 = require("./../services/order.service");
var online_order_service_1 = require("./../services/online-order.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_charts_1 = require("ng2-charts");
var admin_routing_module_1 = require("./admin-routing.module");
var admin_component_1 = require("./../admin/admin.component");
var admin_navigation_component_1 = require("./admin-navigation/admin-navigation.component");
var layout_1 = require("@angular/cdk/layout");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var card_1 = require("@angular/material/card");
var menu_1 = require("@angular/material/menu");
var admin_dashboard_component_1 = require("./admin-dashboard/admin-dashboard.component");
var grid_list_1 = require("@angular/material/grid-list");
var card_component_1 = require("./admin-dashboard/card/card.component");
var product_sales_chart_component_1 = require("./admin-dashboard/charts/product-sales-chart/product-sales-chart.component");
var sales_traffic_chart_component_1 = require("./admin-dashboard/charts/sales-traffic-chart/sales-traffic-chart.component");
var annual_sales_chart_component_1 = require("./admin-dashboard/charts/annual-sales-chart/annual-sales-chart.component");
var store_sessions_chart_component_1 = require("./admin-dashboard/charts/store-sessions-chart/store-sessions-chart.component");
var sales_service_1 = require("../services/sales.service");
var admin_table_component_1 = require("./admin-dashboard/admin-table/admin-table.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var mini_card_component_1 = require("./admin-dashboard/mini-card/mini-card.component");
var store_summary_service_1 = require("../services/store-summary.service");
var sales_component_1 = require("./admin-navigation/sales/sales.component");
var products_component_1 = require("./admin-navigation/products/products.component");
var customers_component_1 = require("./admin-navigation/customers/customers.component");
var orders_component_1 = require("./admin-navigation/orders/orders.component");
var product_local_service_1 = require("./../services/product-local.service");
var featured_product_component_1 = require("../core/home/featured-product/featured-product.component");
var top_product_component_1 = require("../core/home/top-product/top-product.component");
var latest_product_component_1 = require("../core/home/latest-product/latest-product.component");
var restaurant_products_component_1 = require("./../navigation/restaurant/restaurant-products/restaurant-products.component");
var supermarket_products_component_1 = require("./../navigation/supermarket/supermarket-products/supermarket-products.component");
var create_product_component_1 = require("./admin-navigation/products/create-product/create-product.component");
var update_product_component_1 = require("./admin-navigation/products/update-product/update-product.component");
var product_service_1 = require("../services/product.service");
var sortable_directives_2 = require("../directives/sortable.directives");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                admin_component_1.AdminComponent,
                admin_navigation_component_1.AdminNavigationComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                card_component_1.CardComponent,
                product_sales_chart_component_1.ProductSalesChartComponent,
                sales_traffic_chart_component_1.SalesTrafficChartComponent,
                annual_sales_chart_component_1.AnnualSalesChartComponent,
                store_sessions_chart_component_1.StoreSessionsChartComponent,
                admin_table_component_1.AdminTableComponent,
                mini_card_component_1.MiniCardComponent,
                sales_component_1.SalesComponent,
                products_component_1.ProductsComponent,
                customers_component_1.CustomersComponent,
                orders_component_1.OrdersComponent,
                featured_product_component_1.FeaturedProductComponent,
                top_product_component_1.TopProductComponent,
                latest_product_component_1.LatestProductComponent,
                restaurant_products_component_1.RestaurantProductsComponent,
                supermarket_products_component_1.SupermarketProductsComponent,
                create_product_component_1.CreateProductComponent,
                update_product_component_1.UpdateProductComponent,
                sortable_directives_2.NgbdSortableHeader,
                sortable_directives_2.NgbdSortableHeader2,
                sortable_directives_1.NgbdSortableHeader3
            ],
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                ng2_charts_1.ChartsModule,
                layout_1.LayoutModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                card_1.MatCardModule,
                menu_1.MatMenuModule,
                grid_list_1.MatGridListModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                admin_component_1.AdminComponent,
                admin_navigation_component_1.AdminNavigationComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                card_component_1.CardComponent,
                annual_sales_chart_component_1.AnnualSalesChartComponent,
                product_sales_chart_component_1.ProductSalesChartComponent,
                sales_traffic_chart_component_1.SalesTrafficChartComponent,
                store_sessions_chart_component_1.StoreSessionsChartComponent,
                admin_table_component_1.AdminTableComponent,
                featured_product_component_1.FeaturedProductComponent,
                top_product_component_1.TopProductComponent,
                latest_product_component_1.LatestProductComponent,
                restaurant_products_component_1.RestaurantProductsComponent,
                supermarket_products_component_1.SupermarketProductsComponent,
                create_product_component_1.CreateProductComponent,
                update_product_component_1.UpdateProductComponent,
                sortable_directives_2.NgbdSortableHeader,
                sortable_directives_2.NgbdSortableHeader2,
                sortable_directives_1.NgbdSortableHeader3
            ],
            providers: [common_1.DecimalPipe, product_service_1.ProductService, product_local_service_1.ProductLocalService, sales_service_1.SalesService, online_order_service_1.OnlineOrderService, order_service_1.OrderService, store_summary_service_1.StoreSummaryService]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
