import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardPost } from '../models/card-post';

@Injectable({
  providedIn: 'root'
})

export class PostCardService {

  private url: string
  public cards: CardPost[]
  public emailUser:string
  public userName:string
  public cardsUser:CardPost[]

  constructor(private http: HttpClient) {
    this.url = `http://localhost:5000`;
    this.cards = [];
    this.cardsUser = []
  }

  getCardPosts() {
    return this.http.get(this.url + "/posts")
  }

  getCardsFromUser(id_user: number) {
    return this.http.get(`${this.url}/posts?id_user=${id_user}`)
  }

  putCardPost(newCardPost:CardPost){
    return this.http.put(this.url + "/posts", newCardPost)
  }

  postCardPost(newCardPost:CardPost){
    return this.http.post(this.url + "/posts", newCardPost)
  }

  deleteCardPost(id_post:number) {
    return this.http.delete(this.url + '/posts', {body:{id_post:id_post}})
  }

}
