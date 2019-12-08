import React from 'react'
import App from 'next/app'
import dynamic from 'next/dynamic'

const AuthContextProvider = dynamic(
  () => import('../components/auth/auth-context'),
  {
    ssr: false
  }
)

//export interface AuthProps {}
//
//export interface AuthState {}
//
//class Auth extends App<AuthProps, AuthState> {
//  render() {
//    const { Component, pageProps } = this.props
//    return (
//      <AuthContextProvider>
//        <Component {...pageProps} />
//      </AuthContextProvider>
//    )
//  }
//}

//export default Auth

export interface AuthProps {
  children: any
}

const Auth: React.SFC<AuthProps> = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>
}

export default Auth
