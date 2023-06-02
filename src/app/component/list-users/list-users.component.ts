import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  usersList?: Array<User>;
  /**
   * Constructor del componente ListUsersComponent
   * @param userService Servicio de los usuarios para hacer uso de los diferentes métodos
   * @param route Elemento de tipo ActivatedRoute para poder obtener los parámetros de la ruta
   */
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.usersList = data;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  /**
   * Método para borrar un usuario dado su id
   */
  delete() : void {
    let idUser = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.deleteUser(idUser).subscribe(res =>{
      this.userService.getUser(idUser).subscribe(res2 =>{
        let u =  res2;
        let json = JSON.parse(JSON.stringify(u));

        u.first_name = json.data.first_name;
        u.last_name = json.data.last_name;
        alert("Se va a eliminar el usuario:" + u.first_name + " " + u.last_name);
      });
    },
    (e : HttpErrorResponse) => {
      if(e.error instanceof Error){
        console.log("Ha ocurrido un error: " + e.error.message);
      }else{
        console.log("Código de error: " + `${e.status}`);
      }
      
    });
  }


}
