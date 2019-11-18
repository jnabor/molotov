import React, { useContext } from 'react'
import Router from 'next/router'
import Layout from '../../app/AppLayout'

import AuthButton from '../../components/auth/AuthButton'
import AuthEmailField from '../../components/auth/AuthEmailField'
import AuthPasswordField from '../../components/auth/AuthPasswordField'
import AuthLayout from '../../components/auth/AuthLayout'

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

export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  const classes = useStyles(useTheme())

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submit', e)
  }

  return (
    <Layout title='Molotov Auth'>
      <AuthLayout title='Sign In'>
        <form
          className={classes.form}
          onSubmit={e => submitHandler(e)}
          noValidate>
          <AuthEmailField />
          <AuthPasswordField />
          <AuthButton>Sign In</AuthButton>
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

export default Auth
