import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  })
)

export interface AuthEmailFieldProps {}

const AuthEmailField: React.SFC<AuthEmailFieldProps> = ({ children }) => {
  const classes = useStyles(useTheme())
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
