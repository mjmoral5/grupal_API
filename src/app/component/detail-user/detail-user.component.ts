import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {
  @Input() user: User = new User(0, "", "", "", "");

  userId: string | null = "";

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');

    
  }


}
