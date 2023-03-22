import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = User;
  public logueado: boolean;

  constructor() {
    this.logueado = false;
    this.user = null;
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


