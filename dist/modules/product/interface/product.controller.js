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
exports.ProductController = void 0;
const newproduct_dto_1 = require("../application/dto/newproduct.dto");
const fromNewProductDtoToEntity_1 = require("../application/mapper/fromNewProductDtoToEntity");
const fromEntityToProductDto_1 = require("../application/mapper/fromEntityToProductDto");
class ProductController {
    constructor(productService, productRepository) {
        this.productService = productService;
        this.productRepository = productRepository;
        this.baseRoute = '/product';
    }
    configureRoutes(app) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        app.get(`${this.baseRoute}`, this.getProducts.bind(this));
        app.post(`${this.baseRoute}`, this.addProduct.bind(this));
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productRepository.getAllProducts();
            const result = products === null || products === void 0 ? void 0 : products.map((product) => (0, fromEntityToProductDto_1.fromEntityToProductDto)(product));
            res.json({ products: result });
        });
    }
    addProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const productDto = new newproduct_dto_1.NewProductDto(body);
                productDto.validate();
                const savedProduct = yield this.productService.addProduct((0, fromNewProductDtoToEntity_1.fromNewProductDtoToEntity)(productDto));
                res.json({ createdProduct: (0, fromEntityToProductDto_1.fromEntityToProductDto)(savedProduct) });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ProductController = ProductController;
