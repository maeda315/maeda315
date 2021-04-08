import React from 'react'
import HeaderSwiper from './HeaderSwiper'
import header from '../styles/header.module.scss'

export default function Header(): JSX.Element {
  return (
    <>
      <HeaderSwiper />
      <p className={header.search}>
        <input type="text" className={header.search__text}></input>
        <span className={header.search__kakeru}>×</span>
        <select name="pets" className={header.search__select}>
          <option value="amp">AMP</option>
          <option value="dart">Dart</option>
          <option value="html/css">HTML / CSS</option>
          <option value="javascriipt">JavaScript</option>
        </select>
        <input
          type="submit"
          className={header.search__submit}
          value="検索"
        ></input>
      </p>
    </>
  )
}
