import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface AxiosRequests {
  get: (url: string, params?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  post: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  put: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  patch: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  remove: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const createRequests = (instance: AxiosInstance): AxiosRequests => {
  return {
    get: async (url, params?, config?) => {
      try {
        return await instance.get(url, { params, ...config })
      } catch (error) {
        console.error('[TMGM] GET request error:\n', error)
        throw error
      }
    },

    post: async (url, data?, config?) => {
      try {
        return await instance.post(url, data, { ...config })
      } catch (error) {
        console.error('[TMGM] POST request error:\n', error)
        throw error
      }
    },

    put: async (url, data?, config?) => {
      try {
        return await instance.put(url, data, { ...config })
      } catch (error) {
        console.error('[TMGM] PUT request error:\n', error)
        throw error
      }
    },

    patch: async (url, data?, config?) => {
      try {
        return await instance.put(url, data, { ...config })
      } catch (error) {
        console.error('[TMGM] PATCH request error:\n', error)
        throw error
      }
    },

    remove: async (url, config?) => {
      try {
        return await instance.delete(url, { ...config })
      } catch (error) {
        console.error('[TMGM] DELETE request error:\n', error)
        throw error
      }
    }
  }
}

export default createRequests
