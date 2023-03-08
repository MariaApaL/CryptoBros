"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var jsonwebtoken_1 = require("jsonwebtoken");
var Token = /** @class */ (function () {
    function Token() {
    }
    Token.generateToken = function (payLoad) {
        return jsonwebtoken_1["default"].sign({
            user: payLoad
        }, Token.secretKey, {
            expiresIn: Token.expiration
        });
    };
    Token.compareToken = function (token) {
        return new Promise(function (resolve, reject) {
            jsonwebtoken_1["default"].verify(token, Token.secretKey, function (err, decoded) {
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
    };
    Token.data = dotenv_1["default"].config();
    Token.secretKey = Token.data.parsed.SECRET_KEY;
    Token.expiration = '1y';
    return Token;
}());
exports["default"] = Token;
