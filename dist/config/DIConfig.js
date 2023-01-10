"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rsdi_1 = __importStar(require("rsdi"));
const user_service_1 = require("../modules/user/application/service/user.service");
const user_repository_1 = require("../modules/user/infrastructure/user.repository");
const user_controller_1 = require("../modules/user/interface/user.controller");
const container = new rsdi_1.default();
const AddUserDefinitions = (container) => {
    container.add({
        UserController: (0, rsdi_1.object)(user_controller_1.UserController).construct((0, rsdi_1.use)(user_service_1.UserService), (0, rsdi_1.use)(user_repository_1.UserRepository)),
        UserService: (0, rsdi_1.object)(user_service_1.UserService).construct((0, rsdi_1.use)(user_repository_1.UserRepository)),
    });
};
