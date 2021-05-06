const fragment = `
  fragment postData on Post {
    title
    postId
    date
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
    posts(first: 1000, where: {search: $search, categoryId: $categoryId}) {
      nodes {
        ...postData
      }
    }
  }
`
export const allIds = `
  query AllIds {
    __typename
    posts(first: 1000) {
      nodes {
        postId
      }
    }
  }
`

export const post = `
  ${fragment}
  query Post($id: ID!) {
    __typename
    post(id: $id,idType: DATABASE_ID) {
      ...postData
      content
    }
  }
`

export const releatePosts = `
  ${fragment}
  query RelatePosts($categoryId: Int) {
    __typename
    posts(first: 1000, where: {categoryId: $categoryId}) {
      nodes {
        ...postData
      }
    }
  }
`
