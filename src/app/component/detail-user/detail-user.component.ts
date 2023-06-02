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
  
  idUser?: number; //Identificador del usuario
  u? : User;  //Un usuario
  /**
   * 
   * @param userService Servicio de los usuarios para hacer uso de los métodos necesarios
   * @param route Elemento de tipo ActivatedRoute para poder obtener los parámetros de la ruta
   */
  constructor(userService : UserService, route : ActivatedRoute){
    this.idUser = Number(route.snapshot.paramMap.get('id'));
    userService.getUser(this.idUser).subscribe(res =>{
      this.u =  res;
      let json = JSON.parse(JSON.stringify(this.u));
      
      //Set de los elementos obtenidos del JSON al usuario creado para su posterior uso
      this.u.idUser = json.data.id;
      this.u.email = json.data.email;
      this.u.first_name = json.data.first_name;
      this.u.last_name = json.data.last_name;
      this.u.avatar = json.data.avatar;
      
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
