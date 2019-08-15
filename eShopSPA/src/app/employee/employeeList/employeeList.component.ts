import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private httpClient: HttpClient) {   }
  EmployeeList: any;

  ngOnInit() {
    this.httpClient.get('http://localhost:5000/api/employee/').subscribe(respose => {
      this.EmployeeList = respose;
      console.log(this.EmployeeList);
    });
   }

}
