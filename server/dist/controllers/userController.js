"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class userController {
    getData(req, res) {
        console.log(req.query);
        let user = req.query.user;
        if (user) {
            return res.status(200).json({
                status: 'ok',
                message: "el usuario es" + user
            });
        }
        else {
            return res.status(500).json({
                status: 'fail',
                message: 'no hay usuario'
            });
        }
    }
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
}
exports.default = userController;
