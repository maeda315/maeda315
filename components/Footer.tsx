import React from 'react'
import footer from '../styles/footer.module.scss'

export default function Footer(): JSX.Element {
  return (
    <>
      <footer>
        <h1 className={footer.highlight}>
          <small className={footer.highlight__small}>
            &copy; 2021 Maeda315
          </small>
        </h1>
      </footer>
    </>
  )
}
