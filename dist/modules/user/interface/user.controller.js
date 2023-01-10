"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService, userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.baseRoute = '/user';
    }
    configureRoutes(app) {
        app.get(`${this.baseRoute}`, () => { });
        app.put(`${this.baseRoute}/:id`, () => { });
    }
}
exports.UserController = UserController;
