import { Component, OnInit } from '@angular/core';
import { Employee } from '../DoItNowClasses';
import { employeeService } from '../emplyeeService.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  private empObj : Employee;

  constructor(private q: employeeService , private route: Router) { }

  ngOnInit() {
    this.GetEmployee();
  }
  GetEmployee() {
    this.q.getEmployeeData().subscribe(
      data => {
        this. empObj = data['msg'];
      }
    )
  }
  updateData(k) {
    this.q.FetchEmployeeById(k);
    this.route.navigate(['/UpdateEmp']);
  }
  deletData(k) {
    this.q.deleteEmployee(k._id).subscribe(
      success => {
        this.GetEmployee();
      }
    )
  }

}
