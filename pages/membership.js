import React from 'react'
import Link from 'next/link'

import Layout from '../components/layout/Layout'
import CoolFacts from '../components/CoolFacts'

const url = '/images/sprite.svg'
export default function contact() {
  return (
    <Layout
      title='Membership Benefits - Afghanistan Business Referrals (ABR)'
      canonical='https://abr.af/membership/'
      descriptionContent='Our membership consists of the highest quality boutique and mid-sized firms who service the national and international clients in jurisdiction of Afghanistan.'
    >
      <div className='min-w-full box-border font-openSans'>
        <div className='flex flex-col py-10 px-8 md:px-16 justify-center items-center text-white background-img-2'>
          <div className='text-xl md:text-3xl mb-2 font-bold font-notoSerif'>Our Membership</div>
          <div className='text-sm md:text-medium lg:text-base font-normal capitalize'>
            build international connections
          </div>
          {/*  <div className='self-end'>
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
                  <span>Membership</span>
                </li>
              </ul>
            </nav>
            {/* End Bread Crumbs
          </div>*/}
        </div>
        <div className='py-24 px-0 md:px-4 lg:px-32 mx-4'>
          <div className='text-center'>
            <h1 className='py-4 mb-8 capitalize flex flex-col font-notoSerif'>
              <span className='text-xl md:text-2xl mb-2'>get local and international exposure</span>
            </h1>
          </div>
          <hr />
          <div className='flex flex-col md:flex-row mt-14'>
            <div className='flex-3 p-0 lg:pr-14'>
              <div className='text-base md:text-xl font-semibold capitalize'>
                locally led. globally connected.
              </div>
              <p className='p-0 py-4 text-sm md:text-medium lg:text-base xl:text-lg'>
                ABR works with and assists leading professional services firms with the growth of
                their practice by building referrals and business development opportunities.
              </p>
              <p className='p-0 py-4 text-sm md:text-medium lg:text-base xl:text-lg'>
                We introduce the most skilled and prominent lawyers, business advisors, accountants,
                translators and professionals in all legal and advisory area and from all parts of
                Afghanistan. ABR is the next generation for finding a specialist lawyer and
                professional for your business requirements in Afghanistan.
              </p>
            </div>
            <div className='flex-1'>
              <div className='p-0 py-4 text-sm md:text-medium lg:text-base xl:text-lg'>
                How can I register? <br /> There’s ...
              </div>
              <Link href='/contact/'>
                <button className='bg-primary px-4 py-2 my-4 text-white capitalize'>
                  contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <CoolFacts />
        <div className='py-8 md:py-12 lg:py-16'>
          <div className='flex flex-col md:flex-row p-4'>
            <div className='lg:py-12 lg:px-44 lg:text-center'>
              <div className='text-sm uppercase tracking-widest text-primary'>Our Values</div>
              <h1 className='py-4 mb-4 text-2xl capitalize font-bold relative small-line__center'>
                We are committed to provide best services
              </h1>
              <div className='py-6'>
                <p className='text-sm md:text-medium lg:text-base xl:text-lg mb-4'>
                  We believe that one firm or individual can’t profess to offer the best advice or
                  the most knowledge across all sectors or fields of advice. Thus, we aim to focus
                  on practice area expertise, by bringing the best of each sector and location to
                  the client. We are the only well-known network of this type in the country. Beside
                  the benefits to the clients; members receive unrivalled value and exposure by
                  being able to deliver an up-to-date profile on their business services, news and
                  legal topics. Our large group of advisers, each with specific expertise and
                  knowledge, allow us to offer a network platform that provides the very best
                  solution for the end user’s requirements. In addition, members has the opportunity
                  to update their profile as required, and can submit relevant topics and news about
                  their firm and services to our global audience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className='flex flex-col px-4 py-16 bg-gray_light_2'>
          {/* Membership Benefits Section */}
          <div className='member__card-section font-openSans'>
            <div>
              <h2 className='flex items-center justify-center text-primary pb-16 text-xl md:text-3xl font-bold font-notoSerif'>
                Why Join ABR?
              </h2>
            </div>
            <div className='text-sm md:text-medium lg:text-base xl:text-lg leading-6'>
              <div className='flex flex-col md:flex-row px-2 md:px-4 lg:px-12 py-0 lg:py-4'>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Each member has its own client manager, who works with the practice to assist
                    its development and marketing needs.
                  </div>
                </div>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Newsfeed on their profile, so they can upload and publish articles, stories,
                    awards and other information they wish to share.
                  </div>
                </div>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Distribute and share of news and topics to local and international audience.
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row px-2 md:px-4 lg:px-12 py-0 lg:py-4'>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    ABR marketing literature, to include: member profile, logo, contact information,
                    website link and promotional editorial.
                  </div>
                </div>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Member’s own profile page, highlighting skills of the individual and of the
                    firm. This is personalized to each client's request.
                  </div>
                </div>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Membership secured by expertise area.
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row px-2 md:px-4 lg:px-12 py-0 lg:py-4'>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Members develop their firm brand globally.
                  </div>
                </div>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Receive local and international businesses.
                  </div>
                </div>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Members build international connections.
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row px-2 md:px-4 lg:px-12 py-0 lg:py-4'>
                <div className='flex-1 relative md:mr-4 lg:mr-8 md:last:mr-0 line-cover'>
                  <div className='py-6 mb-8 separator-line'>
                    Search Engine Optimization (SEO). We constantly work on the Search Engine
                    Optimization of our planforms, meaning our network can be found when potential
                    clients are seeking lawyers and professional advisors in Afghanistan through key
                    word searching on any search engine platforms.
                  </div>
                </div>
                <div className='flex-1'></div>
                <div className='flex-1'></div>
              </div>
            </div>
          </div>
          {/* End Membership Benefits Section */}
        </section>
      </div>
    </Layout>
  )
}
