import { Product } from '../../domain/product.entity'

export const fromModelToEntity = ({
  id,
  description,
  image,
  price,
  stock,
  createdAt,
  updatedAt
}: any): Product => {
  const productEntity = new Product(id,
    description,
    image,
    price,
    stock,
    createdAt,
    updatedAt)

  return productEntity
}
