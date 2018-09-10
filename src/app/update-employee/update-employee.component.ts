import { Component, OnInit } from '@angular/core';
import { employeeService } from '../emplyeeService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private q: employeeService, private route: Router) { }

  ngOnInit() {
    this.q.GetEmployeeById();
  }
  _id = this.q.GetEmployeeById()._id
  Name = this.q.GetEmployeeById().Name;
  Address = this.q.GetEmployeeById().Address;
  Email = this.q.GetEmployeeById().Email;
  Password = this.q.GetEmployeeById().Password;


  update = function (emp) {
    this.objemp = {
      "Name": emp.Name,
      "Address": emp.Address,
      "Email": emp.Email,
      "Password": emp.Password,
      "_id": emp._id
    }
    this.q.UpdateEmployee(this.objemp).subscribe(
      success => {
        this.route.navigate(['/EmpList'])
      }
    );
  }
}
