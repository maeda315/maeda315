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
