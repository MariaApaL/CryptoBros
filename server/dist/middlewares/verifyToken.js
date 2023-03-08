"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const token_1 = __importDefault(require("../class/token"));
const user_model_1 = require("../models/user-model");
const verifyToken = (req, res, next) => {
    let userToken = req.get('Authorization') || '';
    if (userToken !== '') {
        userToken = userToken.split('Bearer ')[1]; //Borra la palabra Bearer del token
    }
    token_1.default.compareToken(userToken).then((decoded) => __awaiter(void 0, void 0, void 0, function* () {
        const myUser = decoded.user._id; //Obtiene el id del token
        const userDB = yield user_model_1.User.findById(myUser); //Obtenemos el usuario
        if (!userDB) { //Si no obtiene ningun usuario, devuelve un 500
            res.status(500).json({
                status: 'error',
                message: 'El usuario no existe'
            });
        }
        else {
            req.body.user = userDB;
        }
        next();
    })).catch(err => {
        console.log('Error aquí...', err); //Error si el token es nulo o no es válido
        res.status(500).json({
            status: 'error',
            message: err + ' ' + userToken
        });
    });
};
exports.verifyToken = verifyToken;
