import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = "";
  password: string = "";

  constructor(private userService: UserService) {}

  loginUser(): void {
    this.userService.register(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
