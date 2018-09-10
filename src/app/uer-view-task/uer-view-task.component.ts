import { Component, OnInit } from '@angular/core';
import { Employee, Task } from '../DoItNowClasses';
import { taskService } from '../taskService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uer-view-task',
  templateUrl: './uer-view-task.component.html',
  styles: []
})
export class UerViewTaskComponent implements OnInit {
  private Email: string;
  constructor(private q: taskService, private route: Router) { }

  private taskObj: Task;
  ngOnInit() {
    this.GetDatabyEmail();
  }
  GetDatabyEmail() {
    var m = JSON.parse(localStorage.getItem("UserData"));
    m.forEach(element => {
      this.Email = element.Email;
    });
    this.q.getTaskDataByEmail(this.Email).subscribe(
      data => {
        this.taskObj = data['msg'];
      }
    );
  }
  ViewTaskDetails(k)
  {
    this.q.FetchTaskById(k);
    this.route.navigate(['/UTaskDetails']);
  }

}
