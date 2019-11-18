import React, { useState, useEffect } from 'react'

import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText
} from '@material-ui/core'

import { Visibility, VisibilityOff } from '@material-ui/icons'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      margin: theme.spacing(2, 0, 0)
    }
  })
)

export interface AuthPasswordFieldProps {}

interface PwState {
  password: string
  showPassword: boolean
  valid: boolean
  hint: string
}

const AuthPasswordField: React.SFC<AuthPasswordFieldProps> = ({ children }) => {
  const classes = useStyles(useTheme())
  const [state, setState] = useState<PwState>({
    password: '',
    showPassword: false,
    valid: true,
    hint: ''
  })

  const handleChange = (prop: keyof PwState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  let delay: any = null
  const validate = (pw: string): any => {
    if (delay !== null) {
      clearTimeout(delay)
    }
    delay = setTimeout(() => {
      const valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(pw)
      setState({
        ...state,
        valid: valid,
        hint: pw.length > 0 ? 'Invalid password.' : 'Enter password.'
      })
      delay = null
    }, 300)
  }

  const hint = state.valid ? null : (
    <FormHelperText error={!state.valid} id='standard-weight-helper-text'>
      {state.hint}
    </FormHelperText>
  )

  return (
    <FormControl
      required
      variant='outlined'
      fullWidth
      className={classes.textfield}>
      <InputLabel htmlFor='outlined-adornment-password' error={!state.valid}>
        Password
      </InputLabel>
      <OutlinedInput
        required
        error={!state.valid}
        id='outlined-adornment-password'
        type={state.showPassword ? 'text' : 'password'}
        onChange={e => validate(e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}>
              {state.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={80}
      />
      {hint}
    </FormControl>
  )
}

export default AuthPasswordField
