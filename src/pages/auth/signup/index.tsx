import React from 'react'
import Router from 'next/router'
import Layout from '../../../app/AppLayout'

import AuthButton from '../../../components/auth/AuthButton'
import AuthEmailField from '../../../components/auth/AuthEmailField'
import AuthPasswordField from '../../../components/auth/AuthPasswordField'
import AuthLayout from '../../../components/auth/AuthLayout'

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

export interface AuthSignupProps {}

const AuthSignup: React.SFC<AuthSignupProps> = () => {
  const classes = useStyles(useTheme())

  return (
    <Layout title='Molotov Auth'>
      <AuthLayout title='Sign Up'>
        <form className={classes.form} noValidate>
          <AuthEmailField />
          <AuthPasswordField />
          <AuthButton>Sign Up</AuthButton>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                href='#'
                onClick={() => Router.push('/auth')}
                variant='body2'>
                {'Already have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </Layout>
  )
}

export default AuthSignup
