import React from 'react'
import index from '../styles/index.module.scss'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'
import { NewAllPostsType, AllPostsType, AppProps } from '../modules/interface'

export async function getStaticProps(): Promise<AllPostsType> {
  const allPosts = await getAllPosts()

  // categoryId を抽出し、ユニークのみにする。
  let allPostsId: number[] = allPosts.map(
    (n) => n.categories.nodes[0].categoryId
  )
  allPostsId = [...new Set(allPostsId)]
  // ユニークの categoryId を新しい配列に格納する
  const newAllPosts: NewAllPostsType[] = []
  for (const n of allPostsId) {
    newAllPosts.push({
      id: n,
      posts: []
    })
  }
  // 該当の categoryId に記事を格納する
  allPosts.map((n) => {
    newAllPosts.find((n2) => {
      if (n2.id === n.categories.nodes[0].categoryId) n2.posts.push(n)
    })
  })

  return {
    props: { newAllPosts }
  }
}

const App: React.FC<AppProps> = ({ newAllPosts }) => {
  return (
    <>
      {newAllPosts.map((n) => (
        <div className={index.articles} key={n.id}>
          {n.posts.map((post) => (
            <article className={index.article} key={post.id}>
              <Link href={`posts/${post.id}`}>
                <a>
                  {post.featuredImage && (
                    <div
                      style={{
                        backgroundImage: `url(${post.featuredImage.node.mediaItemUrl})`
                      }}
                      className={index.article__img}
                    />
                  )}
                  <h2 className={index.article__highlight}>{post.title}</h2>
                </a>
              </Link>
            </article>
          ))}
        </div>
      ))}
    </>
  )
}

export default App
