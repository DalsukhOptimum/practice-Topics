import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
   { path: 'employee', component: EmployeeComponent },
   { path: 'employee/:id', component: EmployeeComponent },
   { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
