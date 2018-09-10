import { Component, OnInit } from '@angular/core';
import { employeeService } from '../emplyeeService.service';
import { Employee } from '../DoItNowClasses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  msg: string = "Team Member Added Successfully..!";
  isAdded: boolean = false;
  private employee: Employee;
  constructor(private q: employeeService, private route: Router) { }

  ngOnInit() {

  }
  AddNewEmployee = function (vd) {
    this.employee = {
      "Name": vd.Name,
      "Email": vd.Email,
      "Address": vd.Address,
      "Password": vd.Password
    }
    this.q.createEmployeeData(this.employee).subscribe(data => {
      this.isAdded = true;
     

    });
  }

}
