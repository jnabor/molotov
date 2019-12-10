import React from 'react'
import dynamic from 'next/dynamic'

const AuthContextProvider = dynamic(
  () => import('../components/auth/auth-context'),
  {
    ssr: false
  }
)

export interface AuthProps {
  children: any
}

const Auth: React.SFC<AuthProps> = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>
}

export default Auth
