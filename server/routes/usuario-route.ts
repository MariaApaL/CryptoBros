import { Router , Request , Response} from "express";


const usuarioRuta = Router();
usuarioRuta.get("/login",(req: Request,res: Response)=>{

    console.log(req.query);
    
    res.send({
        status:200,
        message:"Todo guay"
    })
})

export default usuarioRuta;