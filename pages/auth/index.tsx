import React, { useContext, useState, useEffect } from 'react'
import Router from 'next/router'
import Layout from '../../app/AppLayout'

import AuthButton from '../../components/auth/AuthButton'
import AuthEmailField from '../../components/auth/AuthEmailField'
import AuthPasswordField from '../../components/auth/AuthPasswordField'
import AuthLayout from '../../components/auth/AuthLayout'
import { AuthContext } from '../../context/auth-context'
import Snackbar from '../../components/common/Snackbar'

import { Link, Grid } from '@material-ui/core'
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

export interface AuthSignInProps {}

const AuthSignIn: React.SFC<AuthSignInProps> = () => {
  const authContext = useContext(AuthContext)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [disable, setDisable] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setDisable(!(email && password))
  }, [email, password])

  const submitHandler = (e: any) => {
    e.preventDefault()
    authContext
      .signIn(email, password)
      .then(data => {
        console.log(data)
        Router.push('/dashboard')
      })
      .catch(err => {
        console.error('error:', err)
        setError(err)
      })
  }

  const classes = useStyles(useTheme())
  return (
    <Layout title='Molotov Auth'>
      <AuthLayout title='Sign In'>
        <Snackbar variant='error' message={error} />
        <form
          className={classes.form}
          onSubmit={e => submitHandler(e)}
          noValidate>
          <AuthEmailField setEmail={email => setEmail(email)} />
          <AuthPasswordField setPassword={password => setPassword(password)} />
          <AuthButton disabled={disable}>Sign In</AuthButton>
          <Grid container>
            <Grid item xs>
              <Link
                href='#'
                onClick={() => Router.push('/auth/reset')}
                variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href='#'
                onClick={() => Router.push('/auth/signup')}
                variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </Layout>
  )
}

export default AuthSignIn
