import React from 'react'
import Head from 'next/head'

import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'
import NoSsr from '@material-ui/core/NoSsr'

const defaultTheme = {
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(',')
  }
}
const theme = createMuiTheme(defaultTheme)

export interface ThemerProps {
  children: any
}

const Themer: React.SFC<ThemerProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
          rel='stylesheet'></link>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <style jsx global>{`
        body {
          background: ${theme.palette.background.paper};
          font-family: ${theme.typography.fontFamily};
          color: ${theme.palette.primary.main};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <NoSsr>{children}</NoSsr>
      </ThemeProvider>
    </div>
  )
}

export default Themer
