"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    user: { type: String, unique: true, uniqueCaseInsensitive: true },
    pwd: { type: String },
    email: { type: String, unique: true },
    age: { type: Number }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)('User', userSchema);
