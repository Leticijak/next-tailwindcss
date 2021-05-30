import fs from 'fs'
import path from 'path'
import Layout from '../../comps/Layout'

export default function BlogPage() {
  return (
    <Layout>
      <h1>BLOG</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  // Create slug with replace method
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    return {
      slug,
    }
  })
  console.log(posts)
  return {
    props: {},
  }
}
