import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name ;
  email ;
  password ;

  SaveFormData() {
    const Employee = {
      Name: this.name,
      Email: this.email,
      Pasword: this.password
    };
    this.httpClinet.post('http://localhost:5000/api/employee', Employee)
    .subscribe(
      (respose) => {
      console.log(respose);
       }
    );

  }
  constructor(private httpClinet: HttpClient) {   }

  ngOnInit() {
  }

}
