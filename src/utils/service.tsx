/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios'

class Service {
  instance: AxiosInstance
  constructor() {
    ;(this.instance = axios.create({
      baseURL: 'https://dummyjson.com',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    })),
      this.instance.interceptors.request.use(
        (config: any) => {
          return config
        },
        (error: any) => {
          return Promise.reject(error)
        }
      )

    this.instance.interceptors.response.use(
      (response: any) => {
        if (response.status === 200) {
          return response
        }
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }
  async get(url: string, params?: object) {
    try {
      const response = await this.instance.get(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  async post(url: string, data: object) {
    try {
      const response = await this.instance.post(url, data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  async put(url: string, data: object) {
    try {
      const response = await this.instance.put(url, data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async delete(url: string) {
    try {
      const response = await this.instance.delete(url)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Service()
