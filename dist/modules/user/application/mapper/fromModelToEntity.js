"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromModelToEntity = void 0;
const user_entity_1 = require("../../domain/user.entity");
const fromModelToEntity = ({ id, email, verified, createdAt, updatedAt }) => {
    const userEntity = new user_entity_1.User(id, email, verified, createdAt, updatedAt);
    return userEntity;
};
exports.fromModelToEntity = fromModelToEntity;
