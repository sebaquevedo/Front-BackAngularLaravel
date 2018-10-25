import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular2-chartjs';
import {
  ECommerceVisitorsAnalyticsComponent,
} from './visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { SlideOutComponent } from './slide-out/slide-out.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TreeModule } from 'angular-tree-component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { NbDatepickerModule, NbPopoverModule } from '@nebular/theme';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    TreeModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbPopoverModule,
  ],
  declarations: [
    DashboardComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    SlideOutComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class DashboardModule { }
