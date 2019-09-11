import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { EmployeeListComponent } from './employee/employeeList/employeeList.component';
import { AppRouting } from './app.routing';


@NgModule({
   declarations: [
      AppComponent,
      EmployeeComponent,
      HeaderComponent,
      EmployeeListComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRouting
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
