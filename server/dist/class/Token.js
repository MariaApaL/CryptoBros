"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    constructor() { }
    static generateToken(payLoad) {
        return jsonwebtoken_1.default.sign({
            user: payLoad
        }, Token.secretKey, {
            expiresIn: Token.expiration
        });
    }
    static compareToken(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, Token.secretKey, (err, decoded) => {
                if (err) {
                    if (err.name == 'TokenExpiredError') {
                        reject('Sesión caducada');
                    }
                    else {
                        reject('Token inválido');
                    }
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
}
exports.default = Token;
Token.data = dotenv_1.default.config();
Token.secretKey = Token.data.parsed.SECRET_KEY;
Token.expiration = '1y';
