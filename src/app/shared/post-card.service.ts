import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardPost } from '../models/card-post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class PostCardService {

  private url: string
  public cards: CardPost[]
  public user: User

  constructor(private http: HttpClient) {
    this.url = `http://localhost:5000`;
    this.cards = [];
    // this.cards = this.getPostCardsExample()
  }

  // getPostCardsExample() {
  //   let card1 = new CardPost(1, 1, '../../assets/img/perro-triste.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Perro encontrado en la calle, parece abandonado.', 'El Egido, Almería', '22-02-2023')
  //   let card2 = new CardPost(2, 2, '../../assets/img/grupo--gatos-callejeros.jpg', '../../assets/img/avatar-user-default.svg', 'Raquel Sánchez', 'Gatos encontrados por las calle.', 'Roquetas de Mar, Almería', '22-02-2023')
  //   let card3 = new CardPost(3, 1, '../../assets/img/ejemplo3.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Gato encontrado por las calle.', 'Roquetas de Mar, Almería', '22-02-2023')
  //   let card4 = new CardPost(4, 1, '../../assets/img/ejemplo4.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Gato encontrado por las calle.', 'Roquetas de Mar, Almería', '22-02-2023')
  //   let card5 = new CardPost(5, 1, '../../assets/img/ejemplo5.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Gato encontrado por las calle.', 'Roquetas de Mar, Almería', '22-02-2023')
  //   let card6 = new CardPost(6, 1, '../../assets/img/ejemplo6.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Gato encontrado por las calle.', 'Roquetas de Mar, Almería', '22-02-2023')

  //   let arrCard = [card1, card2, card3, card4, card5, card6]

  //   return arrCard
  // }

  // getCard(id_cardPost: number) {
  //   return this.cards.find(card => card.id_cardPost = id_cardPost)
  // }



  getCardPosts() {
    return this.http.get(this.url+"/posts")
  }
  getCardsFromUser(id_user: number) {
    return this.http.get(this.url + "/posts/" + id_user)
  }
}
