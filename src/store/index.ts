import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth'

const rootReducer = combineReducers({ auth: authReducer })

export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
