import { Injectable } from '@angular/core';
import { CardPost } from '../models/card-post';

@Injectable({
  providedIn: 'root'
})

export class PostCardService {

  public cards:CardPost[]
  constructor() { 
    this.cards = this.getPostCardsExample()
  }

  getPostCardsExample() {
        let card1 = new CardPost(1,1,'../../assets/img/perro-triste.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Perro encontrado en la calle, parece abandonado.', 'El Egido, Almería')
        let card2 = new CardPost(2,2,'../../assets/img/grupo--gatos-callejeros.jpg', '../../assets/img/avatar-user-default.svg', 'Raquel Sánchez', 'Gatos encontrados por las calle.', 'Roquetas de Mar, Almería')
        let card3 = new CardPost(3,1,'../../assets/img/ejemplo3.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Gato encontrado por las calle.', 'Roquetas de Mar, Almería')
        let card4 = new CardPost(4,1,'../../assets/img/ejemplo4.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Gato encontrado por las calle.', 'Roquetas de Mar, Almería')
        let card5 = new CardPost(5,1,'../../assets/img/ejemplo5.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Gato encontrado por las calle.', 'Roquetas de Mar, Almería')
        let card6 = new CardPost(6,1,'../../assets/img/ejemplo6.jpg', '../../assets/img/avatar-user-default.svg', 'Sandra Romero', 'Gato encontrado por las calle.', 'Roquetas de Mar, Almería')

        let arrCard = [card1, card2, card3, card4, card5, card6]

        return arrCard
  }

  getCard(id_cardPost:number) {
    return  this.cards.find(card => card.id_cardPost = id_cardPost)
  }



}
