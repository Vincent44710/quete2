import { Component } from '@angular/core';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})

export class UserProfilComponent {
  ageShowed : boolean = true;
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'toto',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
};

