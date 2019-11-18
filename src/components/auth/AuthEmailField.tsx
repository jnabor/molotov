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
  hint: string
}

export interface AuthEmailFieldProps {}

const AuthEmailField: React.SFC<AuthEmailFieldProps> = () => {
  const [state, setState] = useState<EmailState>({
    email: '',
    valid: true,
    hint: ''
  })

  let delay: any = null
  const validate = (email: string): any => {
    if (delay !== null) {
      clearTimeout(delay)
    }
    delay = setTimeout(() => {
      const valid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
      setState({
        ...state,
        valid: valid,
        hint: valid ? '' : email.length > 0 ? 'Invalid email.' : 'Enter email.'
      })
      delay = null
    }, 300)
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
      helperText={state.hint}
      onChange={e => validate(e.currentTarget.value)}
      autoFocus
    />
  )
}

export default AuthEmailField
