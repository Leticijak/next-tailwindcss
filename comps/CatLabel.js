import Link from 'next/link'

export default function CatLabel({ children }) {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    Html: 'orange',
    PHP: 'purple',
    React: 'pink',
  }
  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
