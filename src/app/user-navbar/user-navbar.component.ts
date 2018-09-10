import { Component, OnInit } from '@angular/core';
import { employeeService } from '../emplyeeService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'UserNavBar',
  templateUrl: './user-navbar.component.html',
  styles: []
})
export class UserNavbarComponent implements OnInit {

  constructor(private q: employeeService,private Route:Router) { }

  ngOnInit() {
  }
  onlogout() {
    this.q.logout();
    this.Route.navigate(['/Index']);
    return false;
  }
}
