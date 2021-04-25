import { useRouter } from 'next/router'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncCategories,
  selectCategories,
  fetchAsyncSearch,
  newReset
} from './headerSlice'
import { allCategories, getSearch } from '../lib/wp'
import Carousel from './Carousel'
import header from '../styles/header.module.scss'

const Header = (): JSX.Element => {
  const dispath = useDispatch()
  const router = useRouter()
  const searchWrap = useRef(null)
  const searchText = useRef(null)
  const searchSelect = useRef(null)
  const categories = useSelector(selectCategories)
  const [menuTop, setMenuTop] = useState(0)
  const [menuHeight, setMenuHeight] = useState(0)
  let prevY: number
  const sp = 768

  const searchTouchMove = (e: React.TouchEvent<HTMLInputElement>) => {
    if (window.innerWidth <= sp) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      const currentY = e.targetTouches[0].pageY
      const touchValue = 3
      const touchRange = menuHeight - 10
      if (currentY > prevY && menuTop <= 0) {
        setMenuTop(
          menuTop + touchValue > -touchRange ? 0 : menuTop + touchValue
        )
      } else if (currentY < prevY && menuTop >= -menuHeight) {
        // 上にスクロール
        setMenuTop(
          menuTop - touchValue < -menuHeight + touchRange
            ? -menuHeight
            : menuTop - touchValue
        )
      }
      prevY = currentY
    }
  }

  const searchTouchEnd = () => {
    document.getElementsByTagName('body')[0].style.overflow = ''
  }

  const resizeWindow = () => {
    if (window.innerWidth <= sp) {
      setMenuTop(-searchWrap.current.clientHeight - 1)
      setMenuHeight(searchWrap.current.clientHeight + 1)
    } else {
      setMenuTop(0)
      setMenuHeight(0)
    }
  }

  const topUpdate = () => {
    dispath(
      fetchAsyncSearch({
        query: getSearch,
        variables: {
          search: searchText.current.value,
          categoryId: +searchSelect.current.value
        }
      })
    )
  }

  const searchButton = () => {
    if (router.asPath !== '/') {
      router.push('/')
      setTimeout(() => {
        topUpdate()
      }, 1000)
      return
    }
    topUpdate()
  }

  const searchReset = () => {
    dispath(newReset())
  }

  useEffect(() => {
    resizeWindow()
    dispath(fetchAsyncCategories(allCategories))
    window.addEventListener('resize', resizeWindow)
  }, [dispath])

  return (
    <>
      <Carousel />
      <div
        className={header.search}
        ref={searchWrap}
        style={{ top: `${menuTop}px` }}
        onTouchMove={searchTouchMove.bind(this)}
        onTouchEnd={searchTouchEnd}
      >
        <input
          ref={searchText}
          type="text"
          className={header.search__text}
        ></input>
        <span className={header.search__kakeru}>×</span>
        <select
          name="pets"
          ref={searchSelect}
          className={header.search__select}
        >
          {categories.map((n) => (
            <option value={n.categoryId} key={n.categoryId}>
              {n.name}
            </option>
          ))}
        </select>
        <input
          type="submit"
          onClick={searchButton}
          className={header.search__submit}
          value="検索"
        ></input>
        <input
          type="submit"
          onClick={searchReset}
          className={header.search__submit}
          value="Reset"
        ></input>
      </div>
    </>
  )
}

export default Header
