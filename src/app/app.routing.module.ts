import { EmployeeDetailsComponent } from '../app/components/employee-details/employee-details.component';
import { CreateEmployeeComponent } from '../app/components/create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from '../app/components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from '../app/components/update-employee/update-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/add', component: CreateEmployeeComponent },
  { path: 'employee/update/:id', component: UpdateEmployeeComponent },
  { path: 'employee/details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
