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
        <h1> MOLOTOV COCKTAIL</h1>
        <p>
          Go to{' '}
          <Link href='/auth'>
            <a>Auth</a>
          </Link>
        </p>
        <Button
          onClick={() => Router.push('/auth')}
          variant='outlined'
          color='primary'>
          SIGN IN
        </Button>
      </Container>
    </Layout>
  )
}

export default IndexPage
