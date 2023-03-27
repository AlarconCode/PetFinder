import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:5000/";
  public user = User;
  public logueado: boolean;

  constructor(private http: HttpClient) {
    this.logueado = false;
    this.user = null;
  }

// Conexion con la API>BBDD:
  login(user: User){
    return this.http.post(this.url+"login", user)
  }

  getUser() {
    return this.user
  }

  estaLogueado() {
    return this.logueado = true
  }

  logout() {
    this.user=null;
    return this.logueado = false
  }


}


