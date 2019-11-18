import React, { useState } from 'react'

export interface AuthContextProviderProps {
  children: any
}

export interface AuthContextProviderState {
  authenticated: boolean
  pw: string
  email: string
  user: any
  userConfirmed: boolean
  userSub: string
  signup(username: string, password: string): void
  confirmSignup(username: string, code: string): void
  resendSignup(username: string): void
}

const signup = (username: string, password: string) => {
  console.log('signup')
}

const confirmSignup = (username: string, code: string) => {
  console.log('confirmSignup')
}

const resendSignup = (username: string) => {
  console.log('resendSignup')
}

const initState = {
  authenticated: false,
  pw: '',
  email: '',
  user: {},
  userConfirmed: false,
  userSub: '',
  signup: signup,
  confirmSignup: confirmSignup,
  resendSignup: resendSignup
}

export const AuthContext = React.createContext<AuthContextProviderState>(
  initState
)

const AuthContextProvider: React.SFC<AuthContextProviderProps> = ({
  children
}) => {
  const [state, setState] = useState()

  return (
    <AuthContext.Provider value={initState}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
