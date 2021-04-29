import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { GetStaticProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts } from '../lib/api'
import { NewAllPostsType, PostType } from '../modules/commonType'
import { newReset, selectSearch, selectReset } from '../components/headerSlice'
import Head from '../components/Head'
import index from '../styles/index.module.scss'

interface StaticProps {
  newAllPosts: NewAllPostsType[]
}

function generatePosts(allPosts: PostType[]) {
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

  return newAllPosts
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts()

  return {
    props: { newAllPosts: generatePosts(allPosts) }
  }
}

const App: React.FC<StaticProps> = ({ newAllPosts }) => {
  const [posts, setPosts] = useState(newAllPosts)
  const dispatch = useDispatch()
  const firstUpdate = useRef(true)
  const search = useSelector(selectSearch)
  const reset = useSelector(selectReset)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    setPosts(generatePosts(search))
  }, [search])

  useEffect(() => {
    if (reset) {
      setPosts(newAllPosts)
      dispatch(newReset())
      return
    }
  }, [reset, newAllPosts, dispatch])

  return (
    <>
      <Head
        title={'Maeda315 : Brief note'}
        description={'Maeda315 用のメモ書き'}
        url={`/`}
      />
      {posts.map((n) => (
        <div className={index.articles} key={n.id}>
          {n.posts.map((post) => (
            <article
              id={`block_${post.id}`}
              className={index.article}
              key={post.id}
            >
              <Link href={`/posts/${post.id}`}>
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
