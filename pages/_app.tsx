import '../styles/reset.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component }): JSX.Element {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  )
}
