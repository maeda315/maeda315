import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from '../components/Head'
import error from '../styles/error.module.scss'

const Custom404: React.FC = () => {
  const router = useRouter()
  const errorNumber = 1 + Math.floor(Math.random() * 32)

  return (
    <div className={error.wrap}>
      <Head
        title={'Maeda315 : Error'}
        description={'Maeda315 用のメモ書き'}
        url={`${router.asPath}`}
      />
      <img src={`/error/${errorNumber}.png`} />
      <div className={error.balloon}>
        <p>
          このページは存在しません
          <br />
          <Link href="/">トップ</Link>にお戻りください
        </p>
      </div>
    </div>
  )
}

export default Custom404
