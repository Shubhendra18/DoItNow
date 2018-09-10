import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string = "Invalid User Name or Password!";
  isAdded: boolean = false;
  constructor(private route:Router) { }
  ngOnInit() {
  }
  LoginEmployee(ld) {
    var email = ld.Email;
    var pass = ld.Password;
    if(email=='admin'&& pass=='admin')
    {
    this.route.navigate(['/Home'])
    }
    else
    {
      this.isAdded = true;
    }
  }

}
