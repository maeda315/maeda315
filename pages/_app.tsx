import Head from 'next/head'
import '../styles/reset.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Maeda315</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
