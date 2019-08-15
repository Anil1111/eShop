import {Routes, RouterModule} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList/employeeList.component';

const APP_ROUTE: Routes = [
    {path: '', component: EmployeeComponent},
    {path: 'list' , component: EmployeeListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTE);