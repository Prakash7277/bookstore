export interface UserInterface{
    id:number,
    name:string,
    birth:string,
    email:string,
    phone: string,
    gender:string,
    password:string,
    address:string
}

export class User{


name!:string
birth!:string
email!:string
phone!: string
gender!:string
password!:string
address!:string
}