import React, { useState, useContext } from 'react'
import Router from 'next/router'
import Layout from '../../../app/AppLayout'
import { AuthContext } from '../../../context/auth-context'
import AuthButton from '../../../components/auth/AuthButton'
import AuthLayout from '../../../components/auth/AuthLayout'
import Snackbar from '../../../components/common/Snackbar'

import { Link, Grid, TextField } from '@material-ui/core'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    }
  })
)

export interface AuthSignUpConfProps {}

const AuthSignUpConf: React.SFC<AuthSignUpConfProps> = () => {
  const authContext = useContext(AuthContext)
  const [code, setCode] = useState<string>('')
  const [disable, setDisable] = useState<boolean>(true)
  const [hint, setHint] = useState<string>('')
  const [error, setError] = useState<string>('')

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submit', code)
    e.preventDefault()
    authContext
      .confirmSignUp(code)
      .then(data => {
        console.log(data)
        Router.push('/auth')
      })
      .catch(err => {
        console.error('error:', err)
        setError(err)
      })
  }

  let delay: any = null
  const validate = (code: string): any => {
    if (delay !== null) {
      clearTimeout(delay)
    }
    delay = setTimeout(() => {
      const isValid = code.length === 6
      setDisable(!isValid)
      setHint(isValid ? '' : 'Incorrect code length.')
      setCode(code)
      delay = null
    }, 300)
  }

  const classes = useStyles(useTheme())
  return (
    <Layout title='Molotov Auth'>
      <AuthLayout title='Confirm'>
        <Snackbar variant='error' message={error} />
        <form
          className={classes.form}
          onSubmit={e => submitHandler(e)}
          noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='confirmation'
            label='Confirmation Code'
            name='confirmation'
            helperText={hint}
            onChange={e => validate(e.currentTarget.value)}
          />
          <AuthButton disabled={disable}>Confirm</AuthButton>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                href='#'
                onClick={() => Router.push('/auth/reset')}
                variant='body2'>
                {'Resend confirmation code'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </Layout>
  )
}

export default AuthSignUpConf
