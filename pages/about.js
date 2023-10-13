import React from 'react'
import Link from 'next/link'

import Layout from '../components/layout/Layout'
import CoolFacts from '../components/CoolFacts'

export default function aboutUs() {
  return (
    <Layout
      title='About - Afghanistan Business Referrals (ABR)'
      descriptionContent='ABR is introducing the most skilled lawyers, advisors and professionals from all
      parts of Afghanistan. ABR is the next generation for finding a specialist lawyer and
      professional for your business requirements in Afghanistan.'
      canonical='https://abr.af/about/'
      active='about'
    >
      <div className='min-w-full font-openSans'>
        <div className='flex flex-col py-10 px-8 md:px-16 justify-center items-center text-white background-img-2'>
          <div className='text-xl md:text-3xl mb-2 font-bold font-notoSerif'>About Us</div>
          <div className='text-sm md:text-medium lg:text-base font-normal capitalize'>
            get local and international exposure
          </div>
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
        <div className='py-8 md:py-12 lg:py-16'>
          <div className='flex flex-col md:flex-row p-4'>
            <div className='lg:py-12 lg:px-44 lg:text-center'>
              <div className='text-sm uppercase tracking-widest text-primary'>About Us</div>
              <h1 className='py-4 mb-4 text-2xl capitalize font-bold relative small-line__center'>
                who are we?
              </h1>
              <div className='py-6'>
                <p className='text-sm md:text-medium lg:text-base xl:text-lg mb-4'>
                  Afghanistan Business Referrals (ABR) is a multi-disciplinary professional services
                  network that provides legal, accountancy, financial advice to companies and
                  individuals in the jurisdiction of Afghanistan. ABR is introducing the most
                  skilled lawyers, advisors and professionals from all parts of Afghanistan. ABR is
                  the next generation for finding a specialist lawyer and professional for your
                  business requirements in Afghanistan. We believe that one firm or individual can’t
                  profess to offer the best advice or the most knowledge across all sectors or
                  fields of advice. Thus, we aim to focus on practice area expertise and the
                  jurisdiction, by bringing the best of each sector and location to the client. We
                  are the only well-known network of this type in the country.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CoolFacts />
        <div className='p-4 md:px-0 lg:pr-16'>
          <div className='flex flex-col md:flex-row relative py-8 md:py-28'>
            <div className='flex-1 bg-white sm:bg-gray-400'>
              <div className='mb-6 md:mb-0 md:absolute md:top-0 lg:top-12 md:left-12 lg:left-24 xl:left-32 md:w-96'>
                <img
                  className='max-w-full'
                  src='/images/about-us-3.jpg'
                  alt='Core Values - AfgAfghanistan Business Referrals(ABR)'
                />
              </div>
            </div>
            <div className='flex-1 md:px-4 md:mt-40 lg:mt-0 lg:ml-10'>
              <div className='pb-2 mb-7 text-sm md:text-base uppercase tracking-widest relative small-line__start text-primary'>
                our core values
              </div>
              <h1 className='mb-3 text-2xl font-bold capitalize'>we make legal networks</h1>
              <p className='pt-4 mb-0 lg:mb-4 text-sm md:text-medium lg:text-base xl:text-lg'>
                By being able to link a variety of advisers and professional who operate in the same
                professional community, we create a network that offers referral work across many
                disciplines and service areas in Afghanistan.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex md:px-16'>
            <div className='flex-1 py-24 px-8 md:px-20 bg-gray-200'>
              <h2 className='flex items-center relative text-primary my-4 text-xl font-bold'>
                <span className='line-before pl-20 text-sm md:text-base tracking-widest font-normal'>
                  Find an advisor!
                </span>
              </h2>
              <div className='mb-8 text-xl md:text-2xl capitalize'>
                are you looking for an advisor?
              </div>
              <p className='text-sm md:text-medium lg:text-base xl:text-lg mb-6'>
                Our member holds exclusivity for their area of expertise and jurisdiction.
              </p>
              <button className='px-3 py-3 capitalize bg-gray-400'>
                <Link href='/advisors/'>find an advisor</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
