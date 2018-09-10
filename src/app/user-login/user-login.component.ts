import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeService } from '../emplyeeService.service';
import { Employee } from '../DoItNowClasses';
import { error } from '@angular/compiler/src/util';
import { Key } from 'protractor';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: []
})
export class UserLoginComponent implements OnInit {
  private objemp: Employee;
  msg: string = "Invalid User Name or Password!";
  isAdded: boolean = false;
  constructor(private route: Router, private q: employeeService) { }
  ngOnInit() {
  }

  LoginEmployee = function (emp) {
    this.objemp = {
      "Email": emp.Email,
      "Password": emp.Password,
    }
    this.q.userLogin(this.objemp).subscribe(
      success => {
        this.empObj = success['msg'];
        if (this.empObj == "") {
          this.isAdded = true;
        }
        else {
          localStorage.setItem("UserData",JSON.stringify(this.empObj));
          this.route.navigate(['/UserHome'])
        }
      },
      error => {
        this.isAdded = true;
      }
    );
  }
}
