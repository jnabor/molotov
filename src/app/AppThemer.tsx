import React from 'react'
import Head from 'next/head'

import { ThemeProvider } from '@material-ui/core/styles'

const theme = {
  backgroundColor: '#fff',
  color: '#000'
}

export interface ThemerProps {
  children: any
}

const Themer: React.SFC<ThemerProps> = ({ children }) => {
  return (
    <div>
      <Head>
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
          background: ${theme.backgroundColor};
          font-family: 'Roboto', sans-serif;
          color: ${theme.color};
        }
      `}</style>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default Themer
