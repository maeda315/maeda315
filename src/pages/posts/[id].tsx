import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import { getPost, getAllIds, getReleatePosts } from '../../lib/api'
import { PostType } from '../../modules/commonType'
import posts from '../../styles/posts.module.scss'
import index from '../../styles/index.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
  const allIds = await getAllIds()

  return {
    paths: allIds.map((n) => `/posts/${n.id}`) || [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string
  const post = await getPost({ id })
  const categoryId = post.categories.nodes[0].categoryId as number
  const relatePosts = await getReleatePosts({ categoryId })

  return {
    props: {
      post,
      relatePosts
    }
  }
}

interface AppType {
  post: PostType
  relatePosts: PostType[]
}

const App = ({ post, relatePosts }: AppType): JSX.Element => {
  const createMarkup = () => {
    return { __html: post.content }
  }

  return (
    <>
      <div className={posts.wrap}>
        <article className={posts.posts}>
          {post.featuredImage && (
            <div
              style={{
                backgroundImage: `url(${post.featuredImage.node.mediaItemUrl})`
              }}
              className={posts.posts__img}
            />
          )}
          <h1>{post.title}</h1>
          <section
            className={posts.posts__inner}
            dangerouslySetInnerHTML={createMarkup()}
          ></section>
        </article>
        <div className={index.articles}>
          {relatePosts.map(
            (relate) =>
              post.id !== relate.id && (
                <article className={index.article} key={relate.id}>
                  <Link href={`/posts/${relate.id}`}>
                    <a>
                      {relate.featuredImage && (
                        <div
                          style={{
                            backgroundImage: `url(${relate.featuredImage.node.mediaItemUrl})`
                          }}
                          className={index.article__img}
                        />
                      )}
                      <h2 className={index.article__highlight}>
                        {relate.title}
                      </h2>
                    </a>
                  </Link>
                </article>
              )
          )}
        </div>
      </div>
      <Link href="/">
        <a className={posts.return}>TOP</a>
      </Link>
    </>
  )
}

export default App
