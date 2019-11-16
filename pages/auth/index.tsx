import React from 'react'
import User from '../../components/user'

export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  return (
    <div>
      <h1>The Auth Index page</h1>
      <User name='Son' age={34} />
      <style jsx>{`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Auth
