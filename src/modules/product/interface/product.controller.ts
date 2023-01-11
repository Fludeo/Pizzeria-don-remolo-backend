import { Application, Request, Response } from 'express'
import { ProductService } from '../application/service/product.service'
import { ProductRepository } from '../infrastructure/product.repository'

export class ProductController {
  baseRoute = '/product'

  constructor (private readonly productService: ProductService, private readonly productRepository: ProductRepository) {}

  configureRoutes (app: Application): void {
    app.get(`${this.baseRoute}`, this.getAllProducts.bind(this))
  }

  getAllProducts (req: Request, res: Response): void {
    console.log(req)
    res.json({ products: '' })
  }
}
