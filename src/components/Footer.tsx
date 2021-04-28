import React from 'react'
import footer from '../styles/footer.module.scss'

const Footer = (): JSX.Element => {
  return (
    <>
      <footer>
        <h1 className={footer.highlight}>
          <small className={footer.highlight__small}>
            &copy; 2020-2021 Maeda315 : Brief note
          </small>
        </h1>
      </footer>
    </>
  )
}

export default Footer
