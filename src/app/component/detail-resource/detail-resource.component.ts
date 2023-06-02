import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'src/app/model/resource';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-detail-resource',
  templateUrl: './detail-resource.component.html',
  styleUrls: ['./detail-resource.component.css']
})
export class DetailResourceComponent {
  
  id? : number; 
  r? : Resource;
  constructor(resourceService : ResourceService, route : ActivatedRoute){
    
    this.id = Number(route.snapshot.paramMap.get('id'));
    resourceService.getResourceDetail(this.id).subscribe(res =>{
      this.r =  res;
      let json = JSON.parse(JSON.stringify(this.r));
      
      
      this.r.id = json.data.id;
      this.r.color = json.data.color;
      this.r.name = json.data.name;
      this.r.pantone_value = json.data.pantone_value;
      this.r.year = json.data.year;

    });
  }
}
