import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TaskReport } from './DoItNowClasses';

@Injectable({
  providedIn: 'root'
})
export class TaskReportService {
  private baseUrl: String = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private _http: HttpClient) { }
  createTaskReport(taskReport: TaskReport) {
    return this._http.post(this.baseUrl + '/sendReport', taskReport, { headers: this.headers })
  }
  getTaskReport() {
    return this._http.get(this.baseUrl + '/readReport', { headers: this.headers })
  }
  downloadReport(filename:String) {
    return this._http.post(this.baseUrl + '/download',filename, { headers: this.headers,responseType:'blob' })
  }
}
