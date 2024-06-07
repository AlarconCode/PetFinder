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
  public arrUsers:User[]

  constructor(private http: HttpClient) {
    this.arrUsers = []
    this.logueado = false;
    this.user = null;
    // this.url = `http://localhost:4000`
    this.url = `https://api-rest-pet-finder.vercel.app/`
  }

  userRegister(user:User) {

    return this.http.post(this.url + '/users', user)

  }
  updateUserData(user:User) {

    return this.http.put(this.url + '/users', user)

  }

  login(user: User){    
    return this.http.post(this.url + "/login", user)
  }

  getUsers() {
    return this.http.get(this.url + '/users')
  }

  getUserByid(id_user:number) {
    return this.http.get(this.url + `/users?id_user=${id_user}`)
  }

  getUser() {
    return this.user
  }




}


