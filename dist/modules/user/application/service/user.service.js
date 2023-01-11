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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_entity_1 = require("../../domain/user.entity");
// import { type UserRepository } from '../../infrastructure/user.repository'
const UserEntityNotDefined_1 = require("../error/UserEntityNotDefined");
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(user instanceof user_entity_1.User)) {
                throw new UserEntityNotDefined_1.UserEntityNotDefined();
            }
            const savedUser = yield this.userRepository.saveUser(user);
            return savedUser;
        });
    }
}
exports.UserService = UserService;
