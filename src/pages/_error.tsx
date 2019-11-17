import React from 'react'
import Link from 'next/link'
import Layout from '../app/AppLayout'

export interface errorPageProps {}

const errorPage: React.SFC<errorPageProps> = () => {
  return (
    <Layout title='Molotov Error'>
      <h1>Oops, something went wrong.</h1>
      <p>
        Try{' '}
        <Link href='/'>
          <a>going back</a>
        </Link>
      </p>
    </Layout>
  )
}

export default errorPage
