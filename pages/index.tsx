import React, { useState, useContext, useEffect } from 'react'
import Router from 'next/router'
import Layout from '../components/app/HomeLayout'

import {
  Grid,
  Link,
  Container,
  CssBaseline,
  Paper,
  Typography
} from '@material-ui/core'

import Button from '@material-ui/core/Button'
import Snackbar from '../components/common/Snackbar'
import { AuthContext } from '../components/auth/auth-context'
import AuthButton from '../components/auth/AuthButton'
import AuthEmailField from '../components/auth/AuthEmailField'
import AuthPasswordField from '../components/auth/AuthPasswordField'
import RandomImage from '../components/home/randomImg'

import {
  useTheme,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh'
    },
    paper: {
      margin: theme.spacing(2),
      marginBottom: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'center'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    dashlink: {
      margin: theme.spacing(3, 0, 2)
    }
  })
)

export interface IndexPageProps {}

const IndexPage: React.SFC<IndexPageProps> = () => {
  const authContext = useContext(AuthContext)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [disable, setDisable] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setDisable(!(email && password))
  }, [email, password])

  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
      const signin = await authContext.signIn(email, password)
      console.log(signin)
      Router.push('/dashboard')
    } catch (err) {
      console.error('error:', err)
      setError(err)
    }
  }

  const classes = useStyles(useTheme())

  const login = authContext.isAuth ? (
    <Button
      color='primary'
      variant='contained'
      onClick={() => Router.push('/dashboard')}
      className={classes.dashlink}>
      Dashboard
    </Button>
  ) : (
    <form className={classes.form} onSubmit={e => submitHandler(e)} noValidate>
      <AuthEmailField setEmail={email => setEmail(email)} />
      <AuthPasswordField setPassword={password => setPassword(password)} />
      <AuthButton disabled={disable}>Sign In</AuthButton>
      <Grid container>
        <Grid item xs>
          <Link onClick={() => Router.push('/auth/reset')} variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link onClick={() => Router.push('/auth/signup')} variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  )

  return (
    <div>
      <Grid container component='main' className={classes.root}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Layout title='Molotov Home'>
            <CssBaseline />
            <Container maxWidth='xs'>
              <div className={classes.paper}>
                <Typography variant='h5' gutterBottom>
                  Molotov™ Serverless
                </Typography>
                <Typography variant='subtitle2'>
                  SaaS Starter with Next React Amplify
                </Typography>
                <Snackbar variant='error' message={error} />
                {login}
              </div>
            </Container>
          </Layout>
        </Grid>
        <RandomImage />
      </Grid>
    </div>
  )
}

export default IndexPage
