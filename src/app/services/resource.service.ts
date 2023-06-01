import { Injectable } from '@angular/core';
import { Resource } from '../model/resource';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  resources : Array<Resource> = [];
  /**
   * Constructor del servicio Resource
   * @param http Objeto HttpClient para poder hacer las peticiones a la API
   */
  constructor(private http : HttpClient) {}

  /**
   * Método para obtener los resources de la API
   * @returns Un objeto Observable mapeado con Resource
   */
  getListResources() : Observable<Resource> {
    
    return this.http.get<Resource>("https://reqres.in/api/unknown");
    
    }
    
  }

