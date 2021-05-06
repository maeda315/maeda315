import { getPost } from '../../lib/api'

interface queryType {
  secret: string
  id: number
}

export default async function preview(req, res) {
  const secret = req.query.secret as string
  const id = +req.query.id
  console.log(id)

  // Check the secret and next parameters
  // This secret should only be known by this API route
  if (
    !process.env.WORDPRESS_PREVIEW_SECRET ||
    secret !== process.env.WORDPRESS_PREVIEW_SECRET ||
    !id
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch WordPress to check if the provided `id` or `slug` exists
  const post = await getPost({ id })
  console.log('post', post)

  // If the post doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Post not found' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    post: {
      id: post.postId
      // content: post.content,
      // title: post.title,
      // featuredImage: post.featuredImage
    }
  })

  // Redirect to the path from the fetched post
  // We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/posts/${post.postId}` })
  res.end()
}
