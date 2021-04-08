import React from 'react'
import index from '../styles/index.module.scss'
import Link from 'next/link'

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
