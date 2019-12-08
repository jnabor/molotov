import React from 'react'
import Link from 'next/link'
import Layout from '../app/AppLayout'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  })
)

export interface errorPageProps {}

const errorPage: React.SFC<errorPageProps> = () => {
  const classes = useStyles(useTheme())
  return (
    <Layout title='Molotov Error'>
      <CssBaseline />
      <div className={classes.paper}>
        <h1>Oops, something went wrong.</h1>
        <p>
          Go to{' '}
          <Link href='/'>
            <a>home</a>
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default errorPage
