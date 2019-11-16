import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

export interface IndexPageProps {}

export interface IndexPageState {}

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
  render() {
    return (
      <div>
        <h1>The Main Page</h1>
        <p>
          Got to{' '}
          <Link href='/auth'>
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push('/auth')}>Go to auth</button>
      </div>
    )
  }
}

export default IndexPage
