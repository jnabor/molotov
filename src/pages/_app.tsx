import React from 'react'
import App from 'next/app'
import dynamic from 'next/dynamic'

const AuthContextProvider = dynamic(() => import('../context/auth-context'), {
  ssr: false
})

export interface AppProps {}

export interface AppState {}

class Auth extends App<AppProps, AppState> {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    )
  }
}

export default Auth
