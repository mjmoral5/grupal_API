import { Component } from '@angular/core';
import { ResourceService } from './services/resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grupal_API';

  constructor(private resourceService : ResourceService){
    resourceService.getListResources();
  }
}
