import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    let user = { email: email, password: password };
    return this.http.post<boolean>(this.apiUrl + "login", user);
  }

  register(email: string, password: string): Observable<boolean> {
    let user = { email: email, password: password };
    return this.http.post<boolean>(this.apiUrl + "register", user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + "users?page=2");
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + `users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + "users", user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + `users/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `users/${id}`);
  }
}
