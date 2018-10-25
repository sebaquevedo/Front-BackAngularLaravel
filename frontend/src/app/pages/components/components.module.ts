import { NgModule } from '@angular/core';

import { TreeModule } from 'angular-tree-component';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    TreeModule,
    Ng2SmartTableModule,
    ToasterModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class ComponentsModule { }
