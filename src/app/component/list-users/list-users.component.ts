import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  usersList?: Array<User>;

  constructor(private userService: UserService) { 
    this.userService.getUsers().subscribe(
      (data) => {
        this.usersList = data;
        console.log(this.usersList);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
