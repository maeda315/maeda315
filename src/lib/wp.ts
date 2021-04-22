export const allPosts = `
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
