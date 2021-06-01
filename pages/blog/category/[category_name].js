import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '@/comps/Layout'
import Link from 'next/link'
import Post from '@/comps/Post'
import CategoryList from '@/comps/CategoryList'
import Pagination from '@/comps/Pagination'
import { getPosts } from '@/lib/posts'

export default function CatBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='mr-10 w-3/4'>
          <h1 className='text-5xl border-b-4 p-5 font-bold'>
            Posts in {categoryName}
          </h1>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>

        <div className='w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category_name } }) {
  //
  const files = fs.readdirSync(path.join('posts'))

  // Create slug with replace method
  const posts = getPosts()
  // Filter post by category
  const categories = posts.map((post) => post.frontmatter.category)
  // easy way

  const uniqueCategories = [...new Set(categories)]

  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts: categoryPosts,
      category_name: category_name,
      categories: uniqueCategories,
    },
  }
}
