import { NextFunction } from "express";
import Token from "../class/token";
import { User } from "../models/user-model";

export const verifyToken=(req:any,res:any, next:NextFunction)=>{
    let userToken:string = req.get('Authorization') || '';

    if(userToken !== ''){
        userToken = userToken.split('Bearer ')[1] //Borra la palabra Bearer del token
    }

    Token.compareToken(userToken).then(async (decoded:any)=>{
        const myUser = decoded.user._id; //Obtiene el id del token
        const userDB = await User.findById(myUser); //Obtenemos el usuario

        if(!userDB){ //Si no obtiene ningun usuario, devuelve un 500
            res.status(500).json({
                status:'error',
                message:'El usuario no existe'
            })
        }else{
            req.body.user = userDB;
        }
        next()
    }).catch(err =>{
        console.log('Error aquí...', err); //Error si el token es nulo o no es válido
        res.status(500).json({
            status:'error',
            message: err + ' ' + userToken
        })
    })
}