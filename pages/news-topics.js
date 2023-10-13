import React, { useState } from 'react'
import Link from 'next/link'
import { IntlProvider, FormattedDate } from 'react-intl'

import { animateScroll } from 'react-scroll'

import Layout from '../components/layout/Layout'
import Pagination from '../components/Pagination'
import { getPosts } from '../components/FetchData'

export default function post({ posts }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

  // Get current Posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => {
    animateScroll.scrollTo(300)
    setCurrentPage(pageNumber)
  }
  const selectedPosts = currentPosts.map((post) => (
    <div className='mb-12' key={post.id}>
      <div className='max-w-screen-lg h-auto md:h-96'>
        <img
          className='w-full h-full object-cover'
          src={post.acf.image.url}
          alt={post.acf.image.title}
        />
      </div>
      <div className='mt-6 mb-2'>
        <h2 className='text-lg md:text-xl font-semibold hover:text-primary'>
          <Link href='/article/[article]' as={`/article/${post.slug}`}>
            {post.title.rendered}
          </Link>
        </h2>
      </div>
      <div className='mb-2'>
        <div className='text-sm font-workSans'>
          <IntlProvider locale='en-US'>
            <FormattedDate value={post.modified} day='2-digit' month='long' year='numeric' />
          </IntlProvider>
        </div>
      </div>
      <div
        className='mb-4 text-sm md:text-medium lg:text-base xl:text-lg font-openSans leading-6-important line-clamp-3'
        dangerouslySetInnerHTML={{ __html: post.acf.description.substring(0, 150) }}
      ></div>
      <div className='text-sm'>
        <button className='font-openSans border-none text-primary text-sm md:text-medium lg:text-base border-b border-solid group border-current inline-block bg-transparent pointer pb-0.5 custom-transition hover:text-grey_dark_1'>
          <Link href='/article/[article]' as={`/article/${post.slug}`}>
            Read More
          </Link>
          <span className='ml-1 custom-transition group-hover:ml-2'>&rarr;</span>
        </button>
      </div>
    </div>
  ))
  return (
    <Layout
      title='News & Topics - Afghanistan Business Referrals (ABR)'
      descriptionContent=''
      canonical='https://abr.af/news-topics/'
      active='news and topic'
    >
      <div className='min-w-full box-border font-notoSerif'>
        <div className='flex flex-col py-10 px-8 md:px-16 justify-center items-center text-white background-img-3'>
          <h1 className='text-xl md:text-3xl mb-2 font-bold font-notoSerif'>Blog</h1>
          {/*<div className='self-end'>
         Bread Crumbs
        <nav className='p-2 md:px-4 text-xs sm:text-sm flex items-center justify-center font-openSans'>
          <ul className='inline-flex items-center justify-center p-0 list-none'>
            <li className='inline-flex flex-wrap items-center'>
              <span>You are here</span>
              <svg className='w-3 h-3 mx-2 fill-current' viewBox='0 0 320 512'>
                <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z' />
              </svg>
              <span>Home</span>
              <svg className='w-3 h-3 mx-2 fill-current' viewBox='0 0 320 512'>
                <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z' />
              </svg>
              <span>About Us</span>
            </li>
          </ul>
        </nav>
        {/* End Bread Crumbs
      </div> */}
        </div>
        <main className='min-w-full'>
          <div className='flex flex-col lg:flex-row py-16'>
            <div className='flex-3 px-6 md:px-8 xl:px-12'>
              {/* News Card */}
              {selectedPosts}
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
              {/* End News Card */}
            </div>
            <div className='flex-1 border-l border-gray_light_3'>
              <div className='px-6 md:px-8 lg:px-6 pt-12'>
                <div>
                  <div className='font-bold headline'>Recent Posts</div>
                </div>
                {/* Related Posts - Sidebar */}
                {posts.map((post) => (
                  <div className='border-b border-gray_light_3 last:border-b-0' key={post.id}>
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

export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: { posts: posts },
  }
}
