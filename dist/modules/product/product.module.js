"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = exports.ProductService = exports.ProductController = exports.initProductModule = void 0;
const product_service_1 = require("./application/service/product.service");
Object.defineProperty(exports, "ProductService", { enumerable: true, get: function () { return product_service_1.ProductService; } });
const product_repository_1 = require("./infrastructure/product.repository");
Object.defineProperty(exports, "ProductRepository", { enumerable: true, get: function () { return product_repository_1.ProductRepository; } });
const product_controller_1 = require("./interface/product.controller");
Object.defineProperty(exports, "ProductController", { enumerable: true, get: function () { return product_controller_1.ProductController; } });
const initProductModule = (app, container) => {
    const productController = container.get(product_controller_1.ProductController);
    productController.configureRoutes(app);
};
exports.initProductModule = initProductModule;
