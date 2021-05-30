import Link from 'next/link'

import Image from 'next/image'

export default function Post({ post }) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6 '>
      <Image
        width={600}
        height={420}
        alt=''
        src={post.frontmatter.cover_image}
        className='mb-4 rounded'
      />
      <div className='flex justify-between items-center'>
        <span className='font-light text-gray-600'>
          {post.frontmatter.date}
        </span>
        <div> {post.frontmatter.category}</div>
      </div>
    </div>
  )
}
