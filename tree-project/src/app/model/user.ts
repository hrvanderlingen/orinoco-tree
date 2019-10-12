import { Role } from "./role";

export interface IUser {
    id: number,
    username: string,
    password: string,
    fullname: string,
    firstname:string,
    lastname:string,
    token: string,
    role: Role  
}
