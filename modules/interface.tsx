export interface PostType {
  title: string
  id: string
  featuredImage: null | string
  categories: {
    nodes: {
      name: string
      parent: unknown
      categoryId: number
    }
  }
}
