"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor({ id, email, verified }) {
        this.id = id;
        this.email = email;
        this.verified = verified;
    }
    validate() {
        if (this.id === undefined) {
            throw new Error('Validation error');
        }
    }
}
exports.UserDto = UserDto;
