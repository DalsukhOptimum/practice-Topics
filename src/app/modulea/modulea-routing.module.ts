import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleaComponent } from './modulea.component';
import { AcomponentComponent } from '../acomponent/acomponent.component';

const routes: Routes = [{ path: '', component: ModuleaComponent },
  {path:'ok',component:AcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleaRoutingModule { }
