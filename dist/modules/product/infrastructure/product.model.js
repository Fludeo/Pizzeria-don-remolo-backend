"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const sequelize_1 = require("sequelize");
class ProductModel extends sequelize_1.Model {
    static setup(sequelizeInstance) {
        ProductModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: sequelize_1.DataTypes.NUMBER,
                allowNull: false
            },
            stock: {
                type: sequelize_1.DataTypes.NUMBER,
                allowNull: false
            }
        }, {
            sequelize: sequelizeInstance,
            modelName: 'Product',
            tableName: 'Products',
            underscored: true,
            paranoid: true
        });
        return ProductModel;
    }
}
exports.ProductModel = ProductModel;
