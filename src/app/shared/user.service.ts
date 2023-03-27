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

  constructor(private http: HttpClient) {
    this.logueado = false;
    this.user = null;
    this.url = `http://localhost:5000`
  }

  userRegister(user:User) {

    return this.http.post(this.url + '/users', user)

  }
  updateUserData(user:User) {

    return this.http.put(this.url + '/users', user)

  }

  login(user: User){
    return this.http.post(this.url+"/login", user)
  }

  getUser() {
    return this.user
  }


}


