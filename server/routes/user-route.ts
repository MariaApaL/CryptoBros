import { Router , Request , Response} from "express";
import userController from "../controllers/userController";
import { verifyToken } from '../middlewares/verifyToken';


const userRoute = Router();
const u = new userController();
// userRoute.get('/getData', u.getData)

userRoute.post('/login', userController.prototype.login)
userRoute.post('/newUser', userController.prototype.newUser)
userRoute.get('/getProfile', verifyToken, userController.prototype.getProfile)

export default userRoute;