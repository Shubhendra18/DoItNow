import { Component, OnInit } from '@angular/core';
import { Employee } from '../DoItNowClasses';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styles: []
})
export class UserHomeComponent implements OnInit {
  private Name: string;
  private Email:string;
  private Address:string;
  constructor() { }

  ngOnInit() {
    var m = JSON.parse(localStorage.getItem("UserData"));
    m.forEach(element => {
      this.Name = element.Name;
      this.Email=element.Email;
      this.Address=element.Address;

    });
  }

}
