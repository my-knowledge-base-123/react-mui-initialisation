import React from 'react'
import './App.css'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { login } from '@/redux/auth/auth.slice'

function App(): JSX.Element {
  const auth = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const render = (): JSX.Element => {
    if (auth.loading === 'pending') {
      return <div>Fetching</div>
    }

    if (auth.user != null) {
      return (
        <div>
          <p>
            Name: {auth.user.name.first} {auth.user.name.last}
          </p>
          <p>Email: {auth.user.email}</p>
        </div>
      )
    }

    return <div>No User</div>
  }
  return (
    <div className="App">
      <div className="card">
        <button
          onClick={() => {
            void dispatch(login())
          }}
        >
          Fetch user
        </button>
        {render()}
      </div>
    </div>
  )
}

export default App
