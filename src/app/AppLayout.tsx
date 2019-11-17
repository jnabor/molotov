import React from 'react'
import Head from 'next/head'

import Themer from './AppThemer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export interface LayoutProps {
  title: string
  children: any
}

const Layout: React.SFC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Themer>asdasdasd</Themer>
    </div>
  )
}

export default Layout
