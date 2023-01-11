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
exports.ProductRepository = void 0;
const fromModelToEntity_1 = require("../application/mapper/fromModelToEntity");
class ProductRepository {
    constructor(productModel) {
        this.productModel = productModel;
    }
    saveProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedProduct = yield this.productModel.create(product, { isNewRecord: Number.isNaN(product.id) });
            return (0, fromModelToEntity_1.fromModelToEntity)(savedProduct);
        });
    }
}
exports.ProductRepository = ProductRepository;
