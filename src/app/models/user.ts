export class User {
    public id_user: number
    public name: string
    public password: string
    public email: string
    public location_user:string
    public phone: number

    constructor(id_user: number,name: string,password: string,email: string, location_user:string, phone: number){
        this.id_user=id_user
        this.name=name
        this.password=password
        this.email=email
        this.location_user=location_user
        this.phone=phone
    }
}
