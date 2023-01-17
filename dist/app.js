"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DIConfig_1 = __importDefault(require("./config/DIConfig"));
const user_module_1 = require("./modules/user/user.module");
const cors_1 = __importDefault(require("cors"));
const product_module_1 = require("./modules/product/product.module");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const container = (0, DIConfig_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, user_module_1.initUserModule)(app, container);
(0, product_module_1.initProductModule)(app, container);
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.code);
    res.json(err);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
