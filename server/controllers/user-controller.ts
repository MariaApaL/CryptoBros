import {Request, Response} from 'express';


class userController {

    getDatos(req: Request,res: Response){

        console.log(req.query);
        let user = req.query.user;
        if(user){
            return res.status(200).json({
                status:'ok',
                message:"el usuario es " + user

            });
        }else{
            return res.status(500).json({
                status:"fail",
                massage:"no hay usuario"
            });
        }
    
    }
    login(req: Request,res: Response){

        console.log(req.body);
        let user = req.body.user;
        let psw = req.body.psw;
        if(user){
            return res.status(200).json({
                status:'ok',
                message:"el usuario es " + user

            });
        }else{
            return res.status(500).json({
                status:"fail",
                massage:"no hay usuario"
            });
        }
    
    }
}

export default userController;