import { Injectable } from '@angular/core';
import { Resource } from '../model/resource';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  resources : Array<Resource> = [];
  constructor(private http : HttpClient) {}

  getListResources() : Observable<Resource[]> {
    
    return this.http.get<Resource[]>("https://reqres.in/api/unknown");
      // .subscribe(res =>{
      // let recurso : Resource = res;
      // let json = JSON.parse(JSON.stringify(recurso));

      // json.data.forEach(element => {
      //   console.log(element);
      // });

      // console.log(json.data);
    };
    
  }

