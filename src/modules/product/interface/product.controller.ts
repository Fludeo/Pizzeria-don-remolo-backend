import { Application } from 'express'
import { ProductService } from '../application/service/product.service'
import { ProductRepository } from '../infrastructure/product.repository'

export class ProductController {
  baseRoute = '/product'

  constructor (private readonly productService: ProductService, private readonly productRepository: ProductRepository) {}

  configureRoutes (app: Application): void {
    app.get(`${this.baseRoute}`, () => {})
  }
}
