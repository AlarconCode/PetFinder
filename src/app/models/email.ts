export class Email {

    public name:string
    public email:string
    public phone:string
    public comments:string
    public emailUser:string
    public userName:string

    constructor (name:string, email:string, phone:string, comments:string, emailUser:string, userName:string) {
        this.name = name
        this.email = email
        this.phone = phone
        this.comments = comments
        this.emailUser = emailUser
        this.userName = userName
    }

}
