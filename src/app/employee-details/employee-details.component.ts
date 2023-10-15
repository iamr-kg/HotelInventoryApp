import { AppConfig, appConfigToken } from './../app.config';
import { Employee } from './../employee.model';
import { employeeServiceProvider } from './../services/employee.service.provider';
import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers:[employeeServiceProvider]
})
export class EmployeeDetailsComponent implements OnInit {
employeeList!:Employee[]; 
  constructor(private employeeService:EmployeeService, @Inject(appConfigToken) private config:AppConfig) { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getAllEmployees();
    let url = this.config.apiPath
    console.log(url);

  }


}
