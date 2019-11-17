import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

interface EmailState {
  email: string
  valid: boolean
}

export interface AuthEmailFieldProps {}

const AuthEmailField: React.SFC<AuthEmailFieldProps> = () => {
  const [state, setState] = useState<EmailState>({
    email: '',
    valid: true
  })

  const validate = (email: string): any => {
    console.log('validating')
    setState({
      ...state,
      valid: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) ? true : false
    })
  }

  return (
    <TextField
      error={!state.valid}
      variant='outlined'
      margin='normal'
      required
      fullWidth
      id='email'
      label='Email Address'
      name='email'
      autoComplete='email'
      onChange={e => validate(e.currentTarget.value)}
      autoFocus
    />
  )
}

export default AuthEmailField
