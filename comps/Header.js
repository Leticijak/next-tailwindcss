import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      <header className='bg-blue-500 text-white'>
        <div className='container mx-auto flex flex-wrap p-5'>
          <Link href='/'>
            <a className='flex title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
              <Image
                src='/images/logo2.webp'
                width={40}
                height={40}
                alt='logo'
              />
              <span className='ml-3 text-xl'>BlogSpace</span>
            </a>
          </Link>
          <nav className='flex flex-wrap items-center justify-end text-base md:ml-auto'>
            <Link href='/blog'>
              <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                Blog
              </a>
            </Link>
            <Link href='/about'>
              <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                About
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
