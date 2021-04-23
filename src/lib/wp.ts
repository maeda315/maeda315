const fragment = `
  fragment postData on Post {
    title
    id
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    categories {
      nodes {
        name
        parent {
          node {
            name
            categoryId
          }
        }
        categoryId
      }
    }
  }
`
export const allPosts = `
  ${fragment}
  query AllPosts {
    posts(first: 1000) {
      nodes {
        ...postData
      }
    }
  }
`

export const allCategories = `
  query Categories {
    __typename
    categories(first: 1000) {
      nodes {
        categoryId
        name
      }
    }
  }
`

export const getSearch = `
  ${fragment}
  query Search($search: String, $categoryId: Int) {
    __typename
    posts(where: {search: $search, categoryId: $categoryId}) {
      nodes {
        ...postData
      }
    }
  }
`
