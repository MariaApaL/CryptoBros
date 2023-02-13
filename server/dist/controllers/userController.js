"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class userController {
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
    login(req, res) {
        console.log(req.body);
        let user = req.body.user;
        let pwd = req.body.pwd;
        // Aqui venbdría la comprobación del usuario contra la bbdd
        if (user) {
            return res.status(200).json({
                status: 'ok',
                message: "el usuario es" + user
            });
        }
        else {
            return res.status(200).json({
                status: 'fail',
                message: 'no hay usuario'
            });
        }
    }
    newUser(req, res) {
        let pwdPlana = req.body.pwd;
        const hash = bcrypt_1.default.hashSync(pwdPlana, 10);
        const newUser = {
            user: req.body.user,
            email: req.body.email,
            pwd: hash,
            age: req.body.age
        };
        User.create(newUser, (err, userDB) => {
            if (err) {
                return res.status(200).json({
                    status: 'fail',
                    message: 'error al crear el usuario',
                    err
                });
            }
            else {
                return res.status(200).json({
                    status: 'ok',
                    message: 'usuario creado correctamente',
                    userDB
                });
            }
        });
    }
}
exports.default = userController;
