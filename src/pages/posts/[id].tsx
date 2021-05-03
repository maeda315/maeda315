import Link from 'next/link'
import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { getPost, getAllIds, getReleatePosts } from '../../lib/api'
import { PostType } from '../../modules/commonType'
import Head from '../../components/Head'
import posts from '../../styles/posts.module.scss'
import index from '../../styles/index.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
  const allIds = await getAllIds()
  const paths = allIds.map((n) => {
    return {
      params: {
        id: n.id.toString()
      }
    }
  })

  return {
    paths,
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
  const router = useRouter()
  const regex = /(<([^>]+)>)/gi
  const result = post?.content.replace(regex, '').slice(0, 100)
  const createMarkup = () => {
    return { __html: post?.content }
  }

  return (
    <>
      <Head
        title={`Maeda315 : ${post?.title}`}
        description={result}
        url={`${router.asPath}`}
      />
      <div className={posts.wrap}>
        <article className={posts.posts}>
          {post?.featuredImage && (
            <div
              style={{
                backgroundImage: `url(${post?.featuredImage.node.mediaItemUrl})`
              }}
              className={posts.posts__img}
            />
          )}
          <h1>{post?.title}</h1>
          <section
            className={posts.posts__inner}
            dangerouslySetInnerHTML={createMarkup()}
          ></section>
        </article>
        <div className={index.articles}>
          {relatePosts?.map(
            (relate) =>
              post?.id !== relate.id && (
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
      <Link href={`/#block_${post?.id}`}>
        <a className={posts.return}>TOP</a>
      </Link>
    </>
  )
}

export default App
