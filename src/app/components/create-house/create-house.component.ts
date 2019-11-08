import { Component, Input } from '@angular/core';
import {HouseModel, UserModel} from "../../model";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent  {

  constructor() { }

  @Input() CreateHouse;

  statusRegisterHouse:boolean = false;



  Users:UserModel[] = [
    {
      Name: 'Stepan',
      Surname: 'Stepan',
      Email: 'stepan',
      password: '1111',
      is_blocked: false
    }
  ];

  Houses: HouseModel[] = [
    {
      id: 0,
      Owner: this.Users[0],
      Street: 'Doroshenka',
      Area: 75,
      Price: 1200000
    },
  ];

  newHouse:HouseModel = {
    id: 0,
    Owner: this.Users[Math.floor(Math.random()*this.Users.length)],
    Street: '',
    Area: 0,
    Price: 0,
  };

  createNewHouse(){
    this.Houses.push({...this.newHouse, id: this.Houses.length+1});
    console.log(this.Houses);
    alert('Successful')
  }

  registerHouse() {
    this.statusRegisterHouse = !this.statusRegisterHouse;
  }


}
