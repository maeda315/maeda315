import Head from 'next/head'
import React from 'react'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const BASE_URL = publicRuntimeConfig.BASE_URL

interface Props {
  title: string
  description: string
  url: string
}

const App = ({ title, description, url }: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="content-language" content="ja" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={`${BASE_URL}${url}`} />
      <meta property="og:image" content={`${BASE_URL}/ogp.png`} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="canonical" href={`${BASE_URL}${url}`} />
      <link rel="shortcut icon" href={'/favicon.ico'} />
      <link rel="apple-touch-icon" href={'/logo.png'} />
    </Head>
  )
}

const AppComponent = React.memo(App)

export default AppComponent
