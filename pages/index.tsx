import React from 'react'
import index from '../styles/index.module.scss'
import Link from 'next/link'

const App: React.FC = () => {
  return (
    <>
      <section className={index.wrap}>
        <p className={index.search}>
          <input type="text" className={index.search__text}></input>
          <span className={index.search__kakeru}>×</span>
          <select name="pets" className={index.search__select}>
            <option value="amp">AMP</option>
            <option value="dart">Dart</option>
            <option value="html/css">HTML / CSS</option>
            <option value="javascriipt">JavaScript</option>
          </select>
          <input
            type="submit"
            className={index.search__submit}
            value="検索"
          ></input>
        </p>
      </section>
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
