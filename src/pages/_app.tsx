import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/reset.scss'
import { useAmp } from 'next/amp'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const isAmp = useAmp()
  return isAmp ? (
    <Component />
  ) : (
    <Provider store={store}>
      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
