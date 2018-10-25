import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NbDatepickerModule, NbToastrModule } from '@nebular/theme';
import { DashboardModule } from './dashboard/dashboard.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    NbDatepickerModule.forRoot(),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
