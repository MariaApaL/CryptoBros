import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

export default class Token {
    private static data: any = dotenv.config();
    public static secretKey: string = Token.data.parsed.SECRET_KEY;
    public static expiration: string = '1y';
    constructor() { }

    static generateToken(payLoad: any): string {
        return jwt.sign({
            user: payLoad
        },
            Token.secretKey, {
            expiresIn: Token.expiration
        })
    }

    static compareToken(token: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, Token.secretKey, (err, decoded: any) => {
                if (err) {
                    if (err.name == 'TokenExpiredError') {
                        reject('Sesión caducada')
                    } else {
                        reject('Token inválido')
                    }
                } else {
                    resolve(decoded)
                }
            })
        })
    }
}