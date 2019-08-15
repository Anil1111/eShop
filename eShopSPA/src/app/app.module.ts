import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './component/header/header.component';
import { EmployeeListComponent } from './employee/employeeList/employeeList.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';


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
      routing,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
