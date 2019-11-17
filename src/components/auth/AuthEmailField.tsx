import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

export interface AuthEmailFieldProps {}

const AuthEmailField: React.SFC<AuthEmailFieldProps> = ({ children }) => {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      required
      fullWidth
      id='email'
      label='Email Address'
      name='email'
      autoComplete='email'
      autoFocus
    />
  )
}

export default AuthEmailField
