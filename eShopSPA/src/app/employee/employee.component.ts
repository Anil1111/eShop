import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private httpClient: HttpClient) {   }
EmployeeList: any;

insertData ( formData: NgForm) {

  const Employee = {
    id: 0,
    name: formData.value.name,
    email: formData.value.email ,
    pasword: formData.value.pasword
  };

  this.httpClient.post('http://localhost:5000/api/employee/', Employee)
  .subscribe(emp => {
    if (emp) {
      console.log(emp);
    }
  });
  }

  ngOnInit() {
   this.httpClient.get('http://localhost:5000/api/employee/').subscribe(respose => {
     this.EmployeeList = respose;
     console.log(this.EmployeeList);
   });
  }

}
