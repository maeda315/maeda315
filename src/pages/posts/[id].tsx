import Link from 'next/link'
import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { getPost, getAllIds, getReleatePosts } from '../../lib/api'
import { PostType } from '../../types/common'
import Head from '../../components/Head'
import posts from '../../styles/posts.module.scss'
import index from '../../styles/index.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
  const allIds = await getAllIds()
  const paths = allIds.map((n) => {
    return {
      params: {
        id: n.postId.toString()
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData
}) => {
  console.log('previewData', previewData)
  const id = +params.id
  const post = await getPost({ id })
  const categoryId = +post.categories.nodes[0].categoryId
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
  const description = post?.content.replace(regex, '').slice(0, 100)
  const createMarkup = () => {
    return { __html: post?.content }
  }

  return (
    <>
      <Head
        title={`Maeda315 : ${post?.title}`}
        description={description}
        url={router.asPath}
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
              post?.postId !== relate.postId && (
                <article className={index.article} key={relate.postId}>
                  <Link href={`/posts/${relate.postId}`}>
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
      <Link href={`/#block_${post?.postId}`}>
        <a className={posts.return}>TOP</a>
      </Link>
    </>
  )
}

export default App
