import React from 'react'
import Head from 'next/head'
export const config = { amp: true }

export const Amp = ({ post, relatePosts, url }) => {
  const regex = /(<([^>]+)>)/gi
  const description = post?.content.replace(regex, '').slice(0, 100)
  const ampMarkup = () => {
    return { __html: post?.content.replace(/iframe/g, 'amp-iframe') }
  }

  return (
    <>
      <Head>
        <title>{`Maeda315 : ${post?.title}`}</title>
        <meta httpEquiv="content-language" content="ja" />
        <meta property="og:title" content={`Maeda315 : ${post?.title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={`Maeda315 : ${post?.title}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Maeda315 : ${post?.title}`} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href={'/favicon.ico'} />
        <link rel="apple-touch-icon" href={'/logo.png'} />
      </Head>
      <section className="wrap">
        <h2 className="blogName">
          <a href="/">Maeda315 : Brief note</a>
        </h2>
        <article className="contents">
          {post?.featuredImage && (
            <div
              style={{
                backgroundImage: `url(${post?.featuredImage.node.mediaItemUrl})`
              }}
              className="catchImg"
            />
          )}
          <h1>{post?.title}</h1>
          <section dangerouslySetInnerHTML={ampMarkup()}></section>
        </article>
        <ul className="articles">
          {relatePosts?.map(
            (relate) =>
              post?.id !== relate.id && (
                <li key={post.id}>
                  <a key={relate.id} href={`/posts/${relate.id}`}>
                    <div className="articleImg" />
                    <h2 className="articleHighlight">{relate.title}</h2>
                  </a>
                </li>
              )
          )}
        </ul>
      </section>
      <footer>
        <h1>
          <small>&copy; 2020-2021 Maeda315 : Brief note</small>
        </h1>
      </footer>
      <style jsx>{`
        // Reset
        a,
        abbr,
        acronym,
        address,
        applet,
        b,
        big,
        blockquote,
        body,
        caption,
        center,
        cite,
        code,
        dd,
        del,
        dfn,
        div,
        dl,
        dt,
        em,
        fieldset,
        font,
        form,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        html,
        i,
        iframe,
        img,
        ins,
        kbd,
        label,
        legend,
        li,
        object,
        ol,
        p,
        pre,
        q,
        s,
        samp,
        small,
        span,
        strike,
        strong,
        sub,
        sup,
        table,
        tbody,
        td,
        tfoot,
        th,
        thead,
        tr,
        tt,
        u,
        ul,
        var {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          font-size: 100%;
          vertical-align: baseline;
          background: transparent;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 400;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:after,
        blockquote:before,
        q:after,
        q:before {
          content: '';
          content: none;
        }
        body,
        html {
          width: 100%;
          height: 100%;
        }
        :focus {
          outline: 0;
        }
        ins {
          text-decoration: none;
        }
        del {
          text-decoration: line-through;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        a.none {
          text-decoration: none;
          color: inherit;
        }
        #__layout,
        #__nuxt,
        .container,
        body,
        html {
          width: 100%;
        }
        // 記事コンテンツ
        .wrap {
          max-width: 850px;
          margin: 30px auto 0;
          word-break: break-all;
        }
        .catchImg {
          width: 100%;
          min-height: 300px;
          background-size: 100%;
          background-position: center center;
          margin-bottom: 10px;
        }
        .blogName {
          font-size: 3rem;
          text-align: center;
        }
        .blogName a {
          color: inherit;
          text-decoration: none;
        }
        .contents {
          margin-top: 25px;
        }
        .contents h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .contents h2 {
          color: #d4af37;
        }
        .contens img,
        .contens iframe {
          max-width: 100%;
        }
        .contents section {
          margin-top: 10px;
        }
        .contents section > * {
          font-size: 1rem;
          line-height: 2rem;
        }
        .articles {
          font-size: 1rem;
          margin-top: 30px;
        }
        .articles li {
          width: calc(100% - 20px)
          list-style: disc;
          margin: 10px 0 0 20px;
        }
        .articles a {
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }
        footer {
          text-align: center;
          padding: 25px 0;
          background: #000;
          color: #fff;
          margin-top: 50px;
          font-size: 1rem;
        }
        @media screen and (max-width: 768px) {
          .wrap {
            max-width: 90%;
            margin: 30px auto 0;
          }
          .catchImg {
            min-height: 200px;
            margin-bottom: 10px;
          }
          .blogName {
            font-size: 2rem;
          }
          footer {
            padding: 3.125vw 0;
            font-size: 3.125vw;
          }
        }
      `}</style>
    </>
  )
}

export default Amp
