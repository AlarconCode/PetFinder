export class CardPost {

    public id_cardPost:number
    public id_user:number
    public imgPet:string
    public imgUser:string
    public userName:string
    public comment:string
    public place:string

    constructor(id_cardPost:number, id_user:number, imgPet:string, imgUser:string, userName:string, comment:string, place:string) {
        
        this.id_cardPost = id_cardPost
        this.id_user = id_user
        this.imgPet = imgPet
        this.imgUser = imgUser
        this.userName = userName
        this.comment = comment
        this.place = place
    
    }
}


