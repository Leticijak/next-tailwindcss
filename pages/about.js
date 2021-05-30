import Layout from '../comps/Layout'

export default function AboutPage() {
  return (
    <Layout title='About BlogSpace'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>ABOUT</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>BlogSpace Blog</h3>
        <p className='mb-3'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem dolore iure quidem est quibusdam aut architecto commodi
          ratione repellendus repudiandae adipisci consectetur molestias, error
          natus tempore explicabo a eaque itaque nostrum eveniet laudantium
          nemo! Quas nulla earum a saepe soluta in magnam, modi ducimus aut
          perferendis sunt nemo omnis consequatur, architecto accusamus eum
          adipisci quibusdam.
        </p>
        <p>
          <span className='font-bold'>Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}
