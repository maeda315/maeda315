import '../styles/reset.scss'
import Header from '../components/Header'

export default function App({ Component }): JSX.Element {
  return (
    <>
      <Header />
      <Component />
    </>
  )
}
