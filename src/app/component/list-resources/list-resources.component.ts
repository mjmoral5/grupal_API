import { Component } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { Resource } from 'src/app/model/resource';
@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent {
  constructor(private resourceService : ResourceService){}

  getResources() : Array<Resource>{
    let resources : Array<Resource> = [];
    
    this.resourceService.getListResources().subscribe(res =>{
      let r : Resource = res;
      let json = JSON.parse(JSON.stringify(r));

      json.data.forEach(element => {
        console.log(element);
      });

    })
    return resources;
  }
}
