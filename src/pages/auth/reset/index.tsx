import React from 'react'
import Router from 'next/router'
import Layout from '../../../app/AppLayout'

import AuthButton from '../../../components/auth/AuthButton'
import AuthEmailField from '../../../components/auth/AuthEmailField'
import AuthLayout from '../../../components/auth/AuthLayout'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(2, 0, 2)
    }
  })
)

export interface AuthResetProps {}

const AuthReset: React.SFC<AuthResetProps> = () => {
  const classes = useStyles(useTheme())

  return (
    <Layout title='Molotov Auth'>
      <AuthLayout title='Reset'>
        <form className={classes.form} noValidate>
          <AuthEmailField />
          <AuthButton>Reset</AuthButton>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                href='#'
                onClick={() => Router.push('/auth/confirm')}
                variant='body2'>
                {'Already have confirmation code?'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </Layout>
  )
}

export default AuthReset
