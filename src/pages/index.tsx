import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Layout from '../app/AppLayout'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

export interface IndexPageProps {}

export interface IndexPageState {}

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
  render() {
    return (
      <Layout title='Molotov Home'>
        <Container maxWidth='xs'>
          <CssBaseline />
          <h1>The Main Page</h1>
          <p>
            Got to{' '}
            <Link href='/auth'>
              <a>Auth</a>
            </Link>
          </p>
          <button onClick={() => Router.push('/auth')}>Go to auth</button>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
