import { Component, OnInit } from '@angular/core';
import { Task, Employee } from '../DoItNowClasses';
import { employeeService } from '../emplyeeService.service';
import { taskService } from '../taskService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.css']
})
export class TaskAssignComponent implements OnInit {
  private objemp: Employee;
  private task: Task;
  public defaultOption = 0;
  msg: string = "Task Assigned Successfully..!";
  isAdded: boolean = false;

  constructor(private q: employeeService, private p: taskService, private route: Router) { }

  ngOnInit() {
    this.GetEmployee();
  }
  GetEmployee() {
    this.q.getEmployeeData().subscribe(
      data => {
        this.objemp = data['msg'];
      }
    )
  }
 
  AddNewTask = function (task) {
    this.task = {
      "TaskName": task.TaskName,
      "Desc": task.Desc,
      "AssignDate": new Date().toISOString().slice(0, 10),
      "CompleteDate": task.CompleteDate,
      "MemberEmail": task.MemberEmail
    }
    this.p.createTaskData(this.task).subscribe(
      data => {
        this.isAdded = true;
      });
  }

}
