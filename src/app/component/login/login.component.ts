import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private userService: UserService) {}

  loginUser(): void {
    this.userService.login(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

}
