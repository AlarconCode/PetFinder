import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardPost } from '../models/card-post';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class PostCardService {

  private url = `http://localhost:5000`
  public cards:CardPost[]
  constructor(private http:HttpClient, private userService:UserService) { 
    
  }

  getCardPosts() {
    return this.http.get(this.url + '/posts')
  }

  deleteCardPost(id_post:number) {
    return this.http.delete(this.url + '/posts' + {body:{id_post:id_post}})
  }



}
