import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {
  
  idUser?: number;
  u? : User;

  constructor(userService : UserService, route : ActivatedRoute){
    this.idUser = Number(route.snapshot.paramMap.get('id'));
    userService.getUser(2).subscribe(res =>{
      this.u =  res;
      let json = JSON.parse(JSON.stringify(this.u));
      
      this.u
    },
    (e : HttpErrorResponse) => {
      if(e.error instanceof Error){
        console.log("Ha ocurrido un error: " + e.error.message);
      }else{
        console.log("Código de error: " + `${e.status}`);
      }
      
    }
    
    );
  }
}
