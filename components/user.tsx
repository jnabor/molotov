import React from 'react'

export interface UserProps {
  name: string
  age: number
}

const User: React.SFC<UserProps> = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>age:{props.age}</p>
    </div>
  )
}

export default User
