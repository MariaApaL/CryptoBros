import {model, Schema} from 'mongoose';
import { IUser } from '../interfaces/user-interface';

const userSchema = new Schema({
    user:{type:String, unique:true, uniqueCaseInsensitive: true},
    pwd: {type:String},
    email: {type:String, unique: true},
    age:{type:Number}
},{
    timestamps:true
})

export const User = model<IUser>('User', userSchema)