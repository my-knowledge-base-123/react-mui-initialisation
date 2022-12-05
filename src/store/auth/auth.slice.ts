import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error?: string
}

const initialState: AuthState = {
  token: null,
  loading: 'idle',
  error: undefined
}

export const login = createAsyncThunk('auth/login', async () => {
  const formData = new FormData()
  formData.append('email', 'gary@lifebyte.io')
  formData.append('password', 'password')

  const response = await fetch(`http://localhost:8000/api/v1/login`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost'
    },
    body: formData
  })

  return (await response.json()).token.plainTextToken
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = 'pending'
        state.error = undefined
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.error = undefined
        state.token = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error.message
        state.token = null
      })
  }
})

export default authSlice.reducer
