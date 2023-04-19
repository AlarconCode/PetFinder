import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url:string
  constructor(private http:HttpClient) {}

  mailer(email:Email) {
    return this.http.post(`https://api-rest-pet-finder-git-main-alarconcode.vercel.app/email`, email )
  }

}
