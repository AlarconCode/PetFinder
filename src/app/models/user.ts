export class User {
    public id_user: number
    public user_name: string
    public password: string
    public email: string
    public user_location:string
    public phone: number
    public user_image: string

    constructor(id_user: number, user_name: string,password: string,email: string, user_location:string, phone: number, user_image:string){
        this.id_user = id_user
        this.user_name = user_name
        this.password = password
        this.email = email
        this.user_location = user_location
        this.phone = phone
        this.user_image = user_image
    }
}
