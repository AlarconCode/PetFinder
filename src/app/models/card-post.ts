export class CardPost {

    public id_post:number
    public id_user:number
    public post_location:string
    public url_post:string
    public description:string
    public post_date:string
    public found:string
    public user_name:string
    public user_image:string
    
    constructor(id_post:number, id_user:number, post_location:string, url_post:string, description:string, post_date:string, found:string, user_name:string, user_image:string) {
        
        this.id_post = id_post
        this.id_user = id_user
        this.post_location = post_location
        this.url_post = url_post
        this.description = description
        this.post_date = post_date
        this.found = found
        this.user_name = user_name
        this.user_image = user_image

    }
}


