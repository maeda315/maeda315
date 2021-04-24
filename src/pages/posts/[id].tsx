import Link from 'next/link'
import React from 'react'
import posts from '../../styles/posts.module.scss'
import index from '../../styles/index.module.scss'

const App: React.FC = () => {
  return (
    <>
      <div className={posts.wrap}>
        <article className={posts.posts}>
          <div
            style={{ backgroundImage: `url(/swiper/fcowl.png)` }}
            className={posts.posts__img}
          />
          <h1>ここにタイトルがはります</h1>
          <section className={posts.posts__inner}>
            <h2>[あらすじ]</h2>
            <p>
              『ザ・ウェイバック』（The Way
              Back）は2020年のアメリカ合衆国のドラマ映画。監督はギャヴィン・オコナー、主演はベン・アフレックが務めた。なお、本作の撮影時、アフレックは主人公（ジャック）と同様にアルコール依存症を抱えており、「ジャックを演じたことが一種のセラピーになった」という趣旨の発言をしている。
            </p>
            <p>
              引用元 :{' '}
              <a
                href="https://ja.wikipedia.org/wiki/%E3%82%B6%E3%83%BB%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%90%E3%83%83%E3%82%AF"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://ja.wikipedia.org/wiki/%E3%82%B6%E3%83%BB%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%90%E3%83%83%E3%82%AF
              </a>
            </p>
            <h2>[感想]</h2>
            <p>
              ベン・アフレックがまじで良い演技で見入ってしまいます。
              <br />{' '}
              しかも本人もアルコール依存症をかかえており、より映画がリアル感を増して感動を与えます。
              <br /> 良い映画でした。
            </p>
            <p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/89ThYkubMPY"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </p>
            <h2>[お勧め度]</h2>
            <p>★★★★☆ (4/5)</p>
            <h2>[参照]</h2>
            <p>
              <a
                href="https://www.netflix.com/title/81264235"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.netflix.com/title/70281312
              </a>
            </p>
          </section>
        </article>
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
      </div>
      <Link href="/">
        <a className={posts.return}>TOP</a>
      </Link>
    </>
  )
}

export default App
