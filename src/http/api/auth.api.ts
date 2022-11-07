import http from '@/http'

const authApi = {
  login: async (credentials: { email: string; password: string; remember: boolean }) => {
    await http.post('api/v1/login', { ...credentials })
  },

  logout: async () => {
    await http.post('api/v1/logout')
  }
}

export default authApi
