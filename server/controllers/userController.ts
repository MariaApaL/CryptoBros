import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from '../models/user-model';
import Token from "../class/token";
class userController{

    login(req: Request, res:Response){
        console.log(req.body);
        // usuario que va a intentar acceder
        let userLogin = req.body.user;
        let pwdLogin = req.body.pwd

        User.findOne({user: userLogin}, null,null,(err,userDB)=>{
            if(err || !userDB){ //Comprueba si existe el usuario en la BBDD
                return res.status(401).json({ //Si no lo encuentra envia un error 401
                    status: 'Fail',
                    message:'Usuario no encontrado'
                })
            }else{
                // Comprobamos que el usuario y la contraseña coincidan con los de un usuario de nuestra BBDD
                let pwdDB = userDB.pwd;
                let userSent = new User();
                userSent.user = userDB.user;
                userSent._id = userDB._id;
                if(bcrypt.compareSync(pwdLogin, pwdDB)){//Comprueba si la contraseña es la misma
                    return res.status(200).json({ //Si es la misma devuelve mensaje y token
                        status:'ok',
                        message:`Contraseña correcta para el usuario ${userDB.user}`,
                        token: Token.generateToken(userSent)
                    })
                }else{
                    return res.status(401).json({ //Si no, devuelve un 401
                        status:'Fail',
                        message:'Contraseña incorrecta'
                    })
                }
            }
        })
    }

    getProfile(req: Request, res:Response){
        let email = req.body.user.email;
        let userSent = new User()

        userSent.user = req.body.user;
        userSent._id = req.body.user._id;

        return res.status(200).json({
            status:'ok',
            message:`El usuario existe y su email es ${email}`,
            token: Token.generateToken(userSent) //Devolvemos el token
        })
    }

    newUser(req:Request, res:Response){
        let pwdPlana = req.body.pwd;
        const hash = bcrypt.hashSync(pwdPlana,10)
        
        const newUser = {
                user: req.body.user,
                email: req.body.email,
                pwd: hash,
                age: req.body.age
            }

            User.create(newUser, (err, userDB)=>{
                if(err){
                    return res.status(200).json({
                        status:'fail',
                        message:'error al crear el usuario',
                        err
                    })
                }else{
                    return res.status(200).json({
                        status:'ok',
                        message:'usuario creado correctamente'
                    })
                }
            })
        
    }
}

export default userController;