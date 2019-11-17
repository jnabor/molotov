import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Jayson Nabor ™ '}
      <Link color='inherit' href='https://sonabstudios.github.io/molotov/'>
        Molotov
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#eee'
  }
}))

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  const classes = useStyles(useTheme())
  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer
