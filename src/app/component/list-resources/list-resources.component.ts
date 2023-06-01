import { Component } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { Resource } from 'src/app/model/resource';
@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent {

  resources : Array<Resource> = [];
  /**
   * Constructor del componente ListResources
   * @param resourceService Servicio para hacer las llamadas correspondientes de Resources
   */
  constructor(private resourceService : ResourceService) {

    this.resourceService.getListResources().subscribe(res =>{
      let r : Resource = res;
      let json = JSON.parse(JSON.stringify(r));  //Cast a JSON para obtener la información

      for(let i = 0;  i < json.data.length; i++){   //Itero el array data del json que contiene la información
        let resultado : Resource = new Resource(json.data[i].color,json.data[i].id,json.data[i].name,json.data[i].pantone_value,json.data[i].year);
        this.resources.push(resultado);  //Voy creado objetos 'Resource' y los guardo en el array
      }
   })
  }

}
