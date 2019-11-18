import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Layout from '../app/AppLayout'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'

export interface IndexPageProps {}

const IndexPage: React.SFC<IndexPageProps> = () => {
  return (
    <Layout title='Molotov Home'>
      <Container maxWidth='xs'>
        <CssBaseline />
        <h1>MOLOTOV</h1>
        <p>
          Welcome! This is an app boilerplate using Next.js, React.js and AWS
          Amplify
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage
