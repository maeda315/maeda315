import React, { createRef } from 'react'
import HeaderSwiper from './HeaderSwiper'
import header from '../styles/header.module.scss'

interface MyState {
  top: number
  height: number
}

export default class Header extends React.Component<void, MyState> {
  private searchInput = createRef<HTMLInputElement>()
  private prevY: number
  private sp = 768

  constructor(props: void) {
    super(props)
    this.state = { top: 0, height: 0 }
  }

  componentDidMount(): void {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow.bind(this))
  }

  searchTouchMove(e: React.TouchEvent<HTMLInputElement>): void {
    if (window.innerWidth <= this.sp) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      const currentY = e.targetTouches[0].pageY
      const touchValue = 3
      const touchRange = this.state.height - 10
      if (currentY > this.prevY && this.state.top <= 0) {
        // 下にスクロール
        this.setState({
          top:
            this.state.top + touchValue > -touchRange
              ? 0
              : this.state.top + touchValue
        })
      } else if (
        currentY < this.prevY &&
        this.state.top >= -this.state.height
      ) {
        // 上にスクロール
        this.setState({
          top:
            this.state.top - touchValue < -this.state.height + touchRange
              ? -this.state.height
              : this.state.top - touchValue
        })
      }
      this.prevY = currentY
    }
  }

  searchTouchEnd(): void {
    document.getElementsByTagName('body')[0].style.overflow = ''
  }

  resizeWindow(): void {
    if (window.innerWidth <= this.sp) {
      this.setState({
        top: -this.searchInput.current.clientHeight - 1,
        height: this.searchInput.current.clientHeight + 1
      })
    } else {
      this.setState({
        top: 0,
        height: 0
      })
    }
  }

  render(): JSX.Element {
    const top = this.state.top + 'px'
    return (
      <>
        <HeaderSwiper />
        <p
          className={header.search}
          ref={this.searchInput}
          style={{
            top
          }}
          onTouchMove={this.searchTouchMove.bind(this)}
          onTouchEnd={this.searchTouchEnd}
        >
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
}
