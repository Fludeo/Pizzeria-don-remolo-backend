"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromModelToEntity = void 0;
const product_entity_1 = require("../../domain/product.entity");
const fromModelToEntity = ({ id, name, description, category, image, price, stock, createdAt, updatedAt }) => {
    const productEntity = new product_entity_1.Product(id, name, description, image, price, category, stock, createdAt, updatedAt);
    return productEntity;
};
exports.fromModelToEntity = fromModelToEntity;
