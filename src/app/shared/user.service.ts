import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url:string
  public user:User
  public logueado: boolean;

  constructor(private http:HttpClient) {
    this.url = `http://localhost:5000`
    this.logueado = false;
    this.user = null;
  }

  userRegister(user:User) {

    return this.http.post(this.url + '/users', user)

 
  }
  updateUserData(user:User) {

    return this.http.put(this.url + '/users', user)

  }

  login(user: User): boolean {
    if (user) {
      return this.logueado = true
    }
    else {
      return this.logueado = false
    }
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


