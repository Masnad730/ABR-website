import Link from 'next/link'
import { IntlProvider, FormattedDate } from 'react-intl'
import parse from 'html-react-parser'

import Layout from '../../components/layout/Layout'
import { getPosts } from '../../components/FetchData'

export default function post({ posts, post }) {
  return (
    <Layout
      title={`${post.title.rendered} - Afghanistan Business Referrals (ABR)`}
      descriptionContent={post.acf.description.substring(0, 160)}
      canonical={`https://abr.af/article/${post.slug}`}
    >
      <div className='min-w-full box-border font-notoSerif'>
        <div className='flex items-center md:flex-row py-4 px-8 md:px-16 text-white h-48 background-img-3'>
          <div className='max-w-full tracking-wider pl-6 border-l-4 border-white font-bold font-openSans'>
            <div className='text-xl md:text-2xl lg:text-3xl mb-4'>
              <div>{post.title.rendered}</div>
            </div>
            <div className='text-xs'>
              <span className='fas fa-clock mr-2'></span>
              <span>
                <IntlProvider>
                  <FormattedDate value={post.modified} day='2-digit' month='long' year='numeric' />
                </IntlProvider>
              </span>
            </div>
          </div>
        </div>
        <main className='min-w-full'>
          <div className='flex py-16 flex-col lg:flex-row'>
            <div className='flex-3 flex px-6 lg:px-12'>
              <div className='mb-12'>
                <div className='mt-6 mb-4'>
                  <p className='text-sm md:text-medium lg:text-base xl:text-lg font-openSans leading-6-important whitespace-pre-wrap list-decimal'>
                    {parse(post.acf.description)}
                  </p>
                </div>
              </div>
            </div>
            <div className='flex-1 border-l border-gray_light_3'>
              <div className='px-6'>
                <div>
                  <div className='font-bold headline'>Related Posts</div>
                </div>
                {/* Related Posts - Sidebar */}
                {posts.map((post) => (
                  <div className='border-b border-gray_light_3 last:border-b-0'>
                    <div className='mt-4 mb-2'>
                      <h2 className='text-sm md:text-medium lg:text-base leading-6-important transition-all hover:underline hover:text-primary'>
                        <Link href='/article/[article]' as={`/article/${post.slug}`}>
                          {post.title.rendered}
                        </Link>
                      </h2>
                    </div>
                    <div className='mb-3'>
                      <div className='text-xs font-workSans'>
                        <IntlProvider>
                          <FormattedDate
                            value={post.modified}
                            day='2-digit'
                            month='long'
                            year='numeric'
                          />
                        </IntlProvider>
                      </div>
                    </div>
                  </div>
                ))}
                {/* End Related Posts - Sidebar */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const posts = await getPosts()
  const post = posts.find((post) => post.slug === params.slug)
  return {
    props: {
      post,
      posts,
    },
  }
}
