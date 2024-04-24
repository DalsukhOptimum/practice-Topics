import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleaRoutingModule } from './modulea-routing.module';
import { ModuleaComponent } from './modulea.component';
import { AcomponentComponent } from '../acomponent/acomponent.component';


@NgModule({
  declarations: [
    ModuleaComponent,
    AcomponentComponent
  ],
  imports: [
    CommonModule,
    ModuleaRoutingModule
  ]
})
export class ModuleaModule { }
