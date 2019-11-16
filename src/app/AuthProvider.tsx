import React from 'react'
import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'
import { withAuthenticator } from 'aws-amplify-react'

Amplify.configure(awsconfig)

export interface AuthProviderProps {}

export interface AuthProviderState {}

export const AuthContext = React.createContext<AuthProviderState>({})

class AuthProvider extends React.Component<
  AuthProviderProps,
  AuthProviderState
> {
  constructor(props: AuthProviderProps) {
    super(props)
    this.state = {}
  }

  componentDidMount = () => {}

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default withAuthenticator(AuthProvider, true)
