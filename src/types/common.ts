export interface PostType {
  title: string
  postId: number
  content?: string
  date?: string
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
  name: string
  categoryId: number
}

export interface CategoryNodesType {
  categories: {
    nodes: {
      [index: string]: string
    }
  }
}

export interface SearchType {
  search: string
  categoryId: number
}

export interface SearchNodesType {
  posts: {
    nodes: SearchType
  }
}

export interface AllIdsType {
  postId: number
}

export interface NewAllPostsType {
  id: number
  posts: PostType[]
}

export interface FetchAsyncSearchType {
  query: string
  variables: {
    search: string
    categoryId: number
  }
}
