import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AuthReducer from './auth/auth.slice'

const rootReducer = combineReducers({ auth: AuthReducer })

export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
