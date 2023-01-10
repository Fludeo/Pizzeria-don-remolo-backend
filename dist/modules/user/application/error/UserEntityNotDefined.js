"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntityNotDefined = void 0;
class UserEntityNotDefined extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = 'User not defined!!!';
        this.code = 400;
    }
}
exports.UserEntityNotDefined = UserEntityNotDefined;
