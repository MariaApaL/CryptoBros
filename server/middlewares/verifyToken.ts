import { NextFunction } from "express";
import Token from "../class/token";
import { User } from "../models/user-model";

export const verifyToken=(req:any,res:any, next:NextFunction)=>{
    let userToken:string = req.get('Authorization') || '';

    if(userToken !== ''){
        userToken = userToken.split('Bearer ')[1]
    }

    Token.compareToken(userToken).then(async (decoded:any)=>{
        const myUser = decoded.user._id;
        const userDB = await User.findById(myUser);

        if(!userDB){
            res.status(500).json({
                status:'error',
                message:'El usuario no existe'
            })
        }else{
            req.body.user = userDB;
        }
        next()
    }).catch(err =>{
        console.log('Error aquí', err);
        res.status(500).json({
            status:'error',
            message: err
        })
    })
}