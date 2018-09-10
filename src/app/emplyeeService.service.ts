import { Injectable } from '@angular/core';
import { Employee } from './DoItNowClasses';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable(
  {
    providedIn: 'root'
  }
)
export class employeeService {
  private baseUrl: String = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private employee: Employee;

  constructor(private _http: HttpClient) { }
  createEmployeeData(employee: Employee) {
    return this._http.post(this.baseUrl + '/create', employee, { headers: this.headers })
  }
  getEmployeeData() {
    return this._http.get(this.baseUrl + '/read', { headers: this.headers })
  }
  UpdateEmployee(objemp: Employee) {
    return this._http.put(this.baseUrl + '/update', objemp, { headers: this.headers })
  }
  deleteEmployee(id: string) {
    return this._http.delete(this.baseUrl + '/delete/' + id, { headers: this.headers })
  }

  private updateEmployee: Employee;
  FetchEmployeeById(objemp: Employee) {
    this.updateEmployee = objemp;
  }
  GetEmployeeById() {
    return this.updateEmployee;
  }
  userLogin(objemp: Employee) {
    return this._http.post(this.baseUrl + '/userLogin', objemp, { headers: this.headers })
  }
  logout() {
    localStorage.clear();
  }
}
