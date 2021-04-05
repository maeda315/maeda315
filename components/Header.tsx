import React from 'react'
import header from '../styles/header.module.scss'
import Swiper from '../components/Swiper'

export default function Header(): JSX.Element {
  return (
    <>
      <header>
        <h1 className={header.hilight}>Maeda315</h1>
      </header>
      <Swiper />
    </>
  )
}
