import React, { useContext } from 'react'
import Router from 'next/router'

import { AuthContext } from '../context/auth-context'

import {
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: { boxShadow: 'none', backgroundColor: '#e7e7e7' },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    spacer: {
      flexGrow: 1
    }
  })
)

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  const classes = useStyles(useTheme())
  const authContext = useContext(AuthContext)

  let authLink = (
    <Button color='primary' onClick={() => Router.push('/auth')}>
      Sign In
    </Button>
  )
  if (authContext.authenticated) {
    authLink = (
      <Button
        color='primary'
        onClick={() => {
          console.log('sign out')
        }}>
        Sign Out
      </Button>
    )
  }

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          onClick={() => Router.push('/')}
          color='inherit'
          aria-label='home'>
          <HomeIcon color='primary' />
        </IconButton>
        <div className={classes.spacer}></div>
        {authLink}
      </Toolbar>
    </AppBar>
  )
}

export default Footer
