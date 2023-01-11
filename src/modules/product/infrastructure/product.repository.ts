import { Product } from '../domain/product.entity'
import { ProductModel } from './product.model'
import { fromModelToEntity } from '../application/mapper/fromModelToEntity'

export class ProductRepository {
  productModel: typeof ProductModel
  constructor (productModel: ProductModel) {
    this.productModel = productModel as any
  }

  async saveProduct (product: Product): Promise<Product> {
    const savedProduct = await this.productModel.create(product as any, { isNewRecord: Number.isNaN(product.id) })

    return fromModelToEntity(savedProduct)
  }
}
