import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Task, Employee } from './DoItNowClasses';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class taskService {
    private baseUrl: String = "http://localhost:8080";
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private task: Task;

    constructor(private _http: HttpClient) { }



    createTaskData(task: Task) {
        return this._http.post(this.baseUrl + '/createTask', task, { headers: this.headers })
    }
    getTaskData() {
        return this._http.get(this.baseUrl + '/readTask', { headers: this.headers })
    }
    getTaskDataByEmail(Email: string) {
        return this._http.post(this.baseUrl + '/readTaskByEmployee/'+Email, { headers: this.headers })
    }
    private detailedTask: Task;
    FetchTaskById(objTask: Task) {
      this.detailedTask = objTask;
    }
    GetTaskById() {
      return this.detailedTask;
    }
    
}