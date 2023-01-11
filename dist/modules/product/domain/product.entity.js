"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, description, image, price, stock, createdAt, updatedAt) {
        this.id = id;
        this.description = description;
        this.image = image;
        this.price = price;
        this.stock = stock;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.Product = Product;
