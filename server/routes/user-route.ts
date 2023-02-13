import { Router , Request , Response} from "express";


const userRoute = Router();
userRoute.get('/getData',(req: Request,res: Response)=>{

    console.log(req.query);
    
    res.send({
        hola: 'hola',
        adios: 'adios'
    })
})

export default userRoute;