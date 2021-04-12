import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/apiuser/usuarios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Users Funcionando');
  }

  public selectedUser: User = {
    id: null,    
    userName: '',
    password: '',
    token: ''
  };

  getUser(username: String): Observable<User> {    
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }  

  
}
