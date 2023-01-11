export class Product {
  id: number | undefined
  description: string
  image: string
  price: number
  stock: number
  createdAt: string | undefined
  updatedAt: string | undefined

  constructor (id: number,
    description: string,
    image: string,
    price: number,
    stock: number,
    createdAt: string,
    updatedAt: string) {
    this.id = id
    this.description = description
    this.image = image
    this.price = price
    this.stock = stock
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
