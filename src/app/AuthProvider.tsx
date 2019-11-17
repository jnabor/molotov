import React from 'react'
import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'
import { Auth } from 'aws-amplify'

Amplify.configure(awsconfig)

export interface AuthProviderProps {}

export interface AuthProviderState {
  user: any
  userConfirmed: boolean
  userSub: string
  signup(username: string, password: string): void
  confirmSignup(username: string, code: string): void
  resendSignup(username: string): void
}

export const AuthContext = React.createContext<AuthProviderState>({
  user: {},
  userConfirmed: false,
  userSub: '',
  signup: () => {},
  confirmSignup: () => {},
  resendSignup: () => {}
})

class AuthProvider extends React.Component<
  AuthProviderProps,
  AuthProviderState
> {
  constructor(props: AuthProviderProps) {
    super(props)
    this.state = {
      user: {},
      userConfirmed: false,
      userSub: '',
      signup: this.signup,
      confirmSignup: this.confirmSignup,
      resendSignup: this.resendSignup
    }
  }

  componentDidMount = () => {}
  signup = (username: string, password: string) => {
    Auth.signUp({ username, password })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  confirmSignup = (username: string, code: string) => {
    Auth.confirmSignUp(username, code)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  resendSignup = (username: string) => {
    Auth.resendSignUp(username)
      .then(() => {
        console.log('code resent successfully')
      })
      .catch(e => {
        console.log(e)
      })
  }
  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider
