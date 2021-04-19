export interface PostType {
  title: string
  id: string
  featuredImage: null | {
    node
  }
  categories: {
    nodes: {
      name: string
      parent: unknown
      categoryId: number
    }
  }
}

export interface NewAllPostsType {
  id: number
  posts: PostType[]
}

export interface AllPostsType {
  props: {
    newAllPosts: NewAllPostsType[]
  }
}

export interface AppProps {
  newAllPosts: NewAllPostsType[]
}
