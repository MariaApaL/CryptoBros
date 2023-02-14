import {Document} from 'mongoose';

export interface IUser extends Document{
    user: string,
    pwd:string,
    email: string,
    age: number
}