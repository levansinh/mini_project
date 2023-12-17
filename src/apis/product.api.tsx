import { Service } from '../utils'

export const getProducts = async () => {
  const response = await Service.get('/products', {
    limit: 100,
    skip: `0`
  })
  return response
}

export const getProductsByPage = async (page: number = 1) => {
  const response = await Service.get('/products', {
    limit: 10,
    skip: `${page}0`
  })
  return response
}

export const getProduct = async (id: number) => {
  const response = Service.get(`/products/${id}`)
  return response
}

export const createProduct = async (data: object) => {
  const response = await Service.post('/products/add', data)
  return response
}

export const updateProduct = async (data: object, id: number) => {
  const response = await Service.put(`/posts/${id}`, data)
  return response
}

export const deleteProduct = async (id: number) => {
  const response = await Service.delete(`/products/${id}`)
  return response
}
