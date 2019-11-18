import React from 'react'
import Router from 'next/router'
import { shadows } from '@material-ui/system'

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
    appBar: { boxShadow: 'none', backgroundColor: '#b1b5ce' },
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
  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar variant='dense'>
        <IconButton
          edge='start'
          className={classes.menuButton}
          onClick={() => Router.push('/')}
          color='inherit'
          aria-label='home'>
          <HomeIcon />
        </IconButton>
        <div className={classes.spacer}></div>
        <Button color='primary' onClick={() => Router.push('/auth')}>
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
