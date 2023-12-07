import { Service } from '../helpers'

export const getProducts = async () => {
  try {
    const response = await Service.get(`?limit=10&skip=0`)
    return response
  } catch (error) {
    console.log(error)
  }
}
export const createProducts = async (data: object) => {
  try {
    const response = await Service.post('/add', data)
    return response
  } catch (error) {
    console.log(error)
  }
}
