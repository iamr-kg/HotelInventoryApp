import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';

export class EmployeeService {
  employee:Employee[]=[{name:"ashu",id:1,age:23,salary:1,address:"Chandal Nagar,Andheri Gali",isSecret:false},{name:"Rohan",id:2,age:25,salary:100000,address:"Chor Bazaar",isSecret:true},{name:"sotE",id:3,age:25,salary:75000,address:"Diamond Point",isSecret:true},{name:"raju",id:4,age:25,salary:56000,address:"KT nagar",isSecret:false}];
  constructor(private logger:LoggerService, private isAuth: boolean) { }
  getEmployee(empId:number){
    return this.employee.find((employee)=>employee.id==empId&&(this.isAuth||!employee.isSecret));
  }
  getAllEmployees(){
  return this.employee.filter((employee)=>this.isAuth||!employee.isSecret);
  }
}
