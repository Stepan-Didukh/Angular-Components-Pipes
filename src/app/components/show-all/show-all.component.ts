import { Component, Input } from '@angular/core';
import {HouseModel, UserModel} from "../../model";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent {

  constructor() { }
  selectedIndex = -1;

  Users:UserModel[] = [
    {
      Name: 'Stepan',
      Surname: 'Stepan',
      Email: 'stepan',
      password: '1111',
      is_blocked: false
    }
  ];

  randomUser =  Math.floor(Math.random()*this.Users.length);

  Houses: HouseModel[] = [
    {
      id: 0,
      Owner: this.Users[this.randomUser],
      Street: 'Doroshenka',
      Area: 75,
      Price: 1200000
    },
  ];

  @Input() ShowAll;

  showContent(evt, h) {
    this.selectedIndex = h;
  }

}
