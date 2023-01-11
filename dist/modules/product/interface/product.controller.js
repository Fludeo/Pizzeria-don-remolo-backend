"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    constructor() {
        this.baseRoute = '/product';
    }
    // constructor () {}
    configureRoutes(app) {
        app.get(`${this.baseRoute}`, () => { });
    }
}
exports.ProductController = ProductController;
