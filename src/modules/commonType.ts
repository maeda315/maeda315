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

export interface CategoryType {
  categoryId: number
  name: string
}

export interface NewAllPostsType {
  id: number
  posts: PostType[]
}
