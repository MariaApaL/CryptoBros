"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user-model");
const token_1 = __importDefault(require("../class/token"));
class userController {
    login(req, res) {
        console.log(req.body);
        // usuario que va a intentar acceder
        let userLogin = req.body.user;
        let pwdLogin = req.body.pwd;
        user_model_1.User.findOne({ user: userLogin }, null, null, (err, userDB) => {
            if (err || !userDB) { //Comprueba si existe el usuario en la BBDD
                return res.status(401).json({
                    status: 'Fail',
                    message: 'Usuario no encontrado'
                });
            }
            else {
                // Comprobamos que el usuario y la contraseña coincidan con los de un usuario de nuestra BBDD
                let pwdDB = userDB.pwd;
                let userSent = new user_model_1.User();
                userSent.user = userDB.user;
                userSent._id = userDB._id;
                if (bcrypt_1.default.compareSync(pwdLogin, pwdDB)) { //Comprueba si la contraseña es la misma
                    return res.status(200).json({
                        status: 'ok',
                        message: `Contraseña correcta para el usuario ${userDB.user}`,
                        token: token_1.default.generateToken(userSent)
                    });
                }
                else {
                    return res.status(401).json({
                        status: 'Fail',
                        message: 'Contraseña incorrecta'
                    });
                }
            }
        });
    }
    getProfile(req, res) {
        let email = req.body.user.email;
        let userSent = new user_model_1.User();
        userSent.user = req.body.user;
        userSent._id = req.body.user._id;
        return res.status(200).json({
            status: 'ok',
            message: `El usuario existe y su email es ${email}`,
            token: token_1.default.generateToken(userSent) //Devolvemos el token
        });
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
        user_model_1.User.create(newUser, (err, userDB) => {
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
                    message: 'usuario creado correctamente'
                });
            }
        });
    }
}
exports.default = userController;
