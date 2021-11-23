import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/index.scss'
import Navbar from '../components/Navbar'

function FlatMx({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="px-6 py-3">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default FlatMx
