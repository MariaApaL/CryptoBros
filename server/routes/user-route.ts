import { Router , Request , Response} from "express";
import userController from "../controllers/user-controller";

const userRoute = Router();

// userRoute.get("/login",(req: Request,res: Response)=>{

//     console.log(req.query);
    
//     res.send({
//         status:200,
//         message:"Todo guay"
//     })
// })

userRoute.get("/getDatos",userController.prototype.getDatos);
userRoute.post("/login",userController.prototype.login);

export default userRoute;