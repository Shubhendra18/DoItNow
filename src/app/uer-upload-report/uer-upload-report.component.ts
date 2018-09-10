import { Component, OnInit } from '@angular/core';
import { Task, Employee, TaskReport } from '../DoItNowClasses';
import { employeeService } from '../emplyeeService.service';
import { taskService } from '../taskService.service';
import { TaskReportService } from '../task-report.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:8080/sendReport1';
@Component({
  selector: 'app-uer-upload-report',
  templateUrl: './uer-upload-report.component.html',
  styles: []
})
export class UerUploadReportComponent implements OnInit {

  private objemp: Employee;
  private taskReport: TaskReport;
  private taskObj: Task;
  private Email: string;
  public TaskName = 0;
  msg: string = "Report Data Sent Successfully..!";
  isAdded: boolean = false;

  constructor(private q: employeeService, private p: taskService, private pp: TaskReportService, private route: Router) { }
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'ReportData' });

  ngOnInit() {
    this.GetDatabyEmail();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  }
  GetDatabyEmail() {
    var m = JSON.parse(localStorage.getItem("UserData"));
    m.forEach(element => {
      this.Email = element.Email;
    });
    this.p.getTaskDataByEmail(this.Email).subscribe(
      data => {
        this.taskObj = data['msg'];
      }
    );
  }
  AddNewTaskReport = function (task) {
    this.taskReport = {
      "TaskName": task.TaskName,
      "Email": this.Email,
      "Des": task.Des,
      "AssignDate": new Date().toISOString().slice(0, 10)
    }
    this.uploader.uploadAll();
    this.pp.createTaskReport(this.taskReport).subscribe(
      data => {
        this.isAdded = true;
      });

  }

}
