import React from 'react'
import Link from 'next/link'
import error from '../styles/error.module.scss'

const Custom404: React.FC = () => {
  const errorNumber = 1 + Math.floor(Math.random() * 32)
  return (
    <div className={error.wrap}>
      <Link href="/">
        <img src={`/error/${errorNumber}.png`} />
      </Link>
    </div>
  )
}

export default Custom404
