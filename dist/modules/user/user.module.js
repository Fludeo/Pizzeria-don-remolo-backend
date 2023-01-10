"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = exports.UserService = exports.UserController = exports.initUserModule = void 0;
const user_controller_1 = require("./interface/user.controller");
Object.defineProperty(exports, "UserController", { enumerable: true, get: function () { return user_controller_1.UserController; } });
const user_service_1 = require("./application/service/user.service");
Object.defineProperty(exports, "UserService", { enumerable: true, get: function () { return user_service_1.UserService; } });
const user_repository_1 = require("./infrastructure/user.repository");
Object.defineProperty(exports, "UserRepository", { enumerable: true, get: function () { return user_repository_1.UserRepository; } });
const initUserModule = (app, container) => {
    const userController = container.get(user_controller_1.UserController);
    userController.configureRoutes(app);
};
exports.initUserModule = initUserModule;
