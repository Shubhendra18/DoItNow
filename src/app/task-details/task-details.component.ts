import { Component, OnInit } from '@angular/core';
import { taskService } from '../taskService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styles: []
})
export class TaskDetailsComponent implements OnInit {

  constructor(private q: taskService, private route: Router) { }

  ngOnInit() {
  }

  TaskName = this.q.GetTaskById().TaskName;
  Desc = this.q.GetTaskById().Desc;
  AssignDate = this.q.GetTaskById().AssignDate;
  CompleteDate = this.q.GetTaskById().CompleteDate;
}
