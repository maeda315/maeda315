import React from 'react'
import footer from '../styles/footer.module.scss'

export default function Header(): JSX.Element {
  return (
    <>
      <footer>
        <h2 className={footer.hilight}>
          <small className={footer.hilight__small}>&copy; 2021 Mada315</small>
        </h2>
      </footer>
    </>
  )
}
