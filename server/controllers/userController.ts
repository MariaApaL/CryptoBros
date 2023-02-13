import { Request, Response } from "express";
import bcrypt from "bcrypt";

class userController{

    // getData(req: Request, res:Response){
    //     console.log(req.query);
    //     let user = req.query.user;
    //     if(user){
    //         return res.status(200).json({
    //             status:'ok',
    //             message:"el usuario es"+ user
    //         });
    //     }else{
    //         return res.status(500).json({
    //             status:'fail',
    //             message:'no hay usuario'
    //         })
    //     }
    // }

    login(req: Request, res:Response){
        console.log(req.body);
        let user = req.body.user;
        let pwd = req.body.pwd

        // Aqui venbdría la comprobación del usuario contra la bbdd
        if(user){
            return res.status(200).json({
                status:'ok',
                message:"el usuario es"+ user
            });
        }else{
            return res.status(200).json({
                status:'fail',
                message:'no hay usuario'
            })
        }
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
                        message:'usuario creado correctamente',
                        userDB
                    })
                }
            })
        
    }
}

export default userController;