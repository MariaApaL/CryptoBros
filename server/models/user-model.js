"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    user: { type: String, unique: true, uniqueCaseInsensitive: true },
    pwd: { type: String },
    email: { type: String, unique: true },
    age: { type: Number }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)('User', userSchema);
