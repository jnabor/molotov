import React from 'react'
import Head from 'next/head'

import Themer from './AppThemer'
import Footer from './AppFooter'
import { useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  }
}))

export interface LayoutProps {
  title: string
  children: any
}

const Layout: React.SFC<LayoutProps> = ({ title, children }) => {
  const classes = useStyles(useTheme())
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Themer>
        <div className={classes.root}>
          <CssBaseline />
          <Container className={classes.main} maxWidth='sm'>
            {children}
          </Container>
          <Footer />
        </div>
      </Themer>
    </div>
  )
}

export default Layout
