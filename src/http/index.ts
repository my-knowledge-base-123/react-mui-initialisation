import axios, { AxiosResponse } from 'axios'
import createRequests from '@/http/createRequests'

/**
 * Initialise Axios instance.
 *
 */
const instance = axios.create({
  headers: {
    'Access-Control-Allow-Origin-Type': '*',
    'Access-Control-Allow-Credentials': true,
    'Project-Name': 'lb-desktop-react'
  },
  timeout: 1000 * 30,
  baseURL: '',
  withCredentials: true
})

/**
 * Response error handler.
 *
 */
const handleError = async (response: AxiosResponse): Promise<void> => {
  const status = response.status
  const message = response.data.message as string

  console.error(`[LB] Response error: [${status}] ${message}`)

  switch (status) {
    // Unauthorized
    case 401:
      break

    default:
      break
  }
}

// Use request interceptor.
instance.interceptors.request.use(
  (requestConfig) => {
    return requestConfig
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

// Use response interceptor.
instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error?.response != null) {
      // Construct error response
      error.response.data = {
        status: error.response.status,
        success: false,
        message: error.response.data?.message,
        errors: error.response.data?.errors,
        ...error.response.data
      }

      await handleError(error.response)

      return await Promise.reject(error)
    } else {
      // TODO: Global failed response handler
      alert('[LB] Failed to response')
    }
  }
)

// Create HTTP requests used throughout the app.
const { get, post, put, patch, remove } = createRequests(instance)

export default { get, post, put, patch, delete: remove }
