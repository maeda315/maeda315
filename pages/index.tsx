import React from 'react'
import index from '../styles/index.module.scss'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'
import { PostType } from '../modules/interface'

interface AllPostsType {
  props: {
    allPosts: PostType[]
  }
}

export async function getStaticProps(): Promise<AllPostsType> {
  const allPosts = await getAllPosts()
  // categoryId を抽出し、ユニークのみにする。
  let allPostsId: number[] = allPosts.map(
    (n) => n.categories.nodes[0].categoryId
  )
  allPostsId = [...new Set(allPostsId)]
  // ユニークの categoryId を新しい配列に格納する
  const newAllPosts: {
    id: number
    posts?: AllPostsType
  }[] = []
  for (const n of allPostsId) {
    newAllPosts.push({
      id: n
    })
  }
  console.log(newAllPosts)
  // 該当の categoryId に記事を格納する
  return {
    props: {
      allPosts
    }
  }
}

const App: React.FC = () => {
  return (
    <>
      <div className={index.articles}>
        <article className={index.article}>
          <Link href="#">
            <a>
              <div
                style={{ backgroundImage: `url(/swiper/fcowl.png)` }}
                className={index.article__img}
              />
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <div
                style={{ backgroundImage: `url(/swiper/fcowl.png)` }}
                className={index.article__img}
              />
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <div
                style={{ backgroundImage: `url(/swiper/fcowl.png)` }}
                className={index.article__img}
              />
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <div
                style={{ backgroundImage: `url(/swiper/fcowl.png)` }}
                className={index.article__img}
              />
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <div
                style={{ backgroundImage: `url(/swiper/fcowl.png)` }}
                className={index.article__img}
              />
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <div
                style={{ backgroundImage: `url(/swiper/fcowl.png)` }}
                className={index.article__img}
              />
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <div
                style={{ backgroundImage: `url(/swiper/fcowl.png)` }}
                className={index.article__img}
              />
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
      </div>
      <div className={index.articles}>
        <article className={index.article}>
          <Link href="#">
            <a>
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
        <article className={index.article}>
          <Link href="#">
            <a>
              <h2 className={index.article__highlight}>
                ここにタイトルが入ります。
              </h2>
            </a>
          </Link>
        </article>
      </div>
    </>
  )
}

export default App
