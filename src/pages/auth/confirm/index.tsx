import React from 'react'
import Router from 'next/router'
import Layout from '../../../app/AppLayout'

import AuthButton from '../../../components/auth/AuthButton'
import AuthLayout from '../../../components/auth/AuthLayout'

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

export interface AuthConfProps {}

const AuthConf: React.SFC<AuthConfProps> = () => {
  const classes = useStyles(useTheme())

  return (
    <Layout title='Molotov Auth'>
      <AuthLayout title='Confirm'>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='confirmation'
            label='Confirmation Code'
            name='confirmation'
            autoFocus
          />
          <AuthButton>Confirm</AuthButton>
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

export default AuthConf
