import Link from 'next/link'

import Layout from '../components/layout/Layout'
import CoolFacts from '../components/CoolFacts'
import Slideshow from '../components/Slideshow'

export default function Home() {
  return (
    <Layout
      title='Afghanistan Business Referral - ABR'
      canonical='https://abr.af/'
      descriptionContent='Afghanistan Business Referrals (ABR) is a multi-disciplinary professional services network that provides legal, accountancy, financial advice to companies and individuals in the jurisdiction of Afghanistan.'
      active='home'
    >
      <Slideshow />
      <section className='py-16 lg:py-24 px-0 md:px-4 lg:px-32 mx-4 font-openSans'>
        <div className='text-center'>
          <h2 className='py-4 mb-8 capitalize flex flex-col font-notoSerif'>
            <span className='text-xl md:text-2xl mb-2'>Afghanistan Business Referrals</span>
          </h2>
        </div>
        <hr />
        <div className='flex flex-col md:flex-row mt-14'>
          <div className='flex-3 p-0 lg:pr-14'>
            <h2 className='text-base md:text-xl font-semibold capitalize'>about ABR</h2>
            <h1 className='p-0 py-4 text-sm md:text-medium lg:text-base xl:text-lg'>
              Afghanistan Business Referrals (ABR) is a multi-disciplinary professional services
              network that provides legal, accountancy, financial advice to companies and
              individuals in the jurisdiction of Afghanistan.
            </h1>
            <p className='p-0 py-4 text-sm md:text-medium lg:text-base xl:text-lg'>
              ABR is introducing the most skilled lawyers, advisors and professionals from all parts
              of Afghanistan. ABR is the next generation for finding a specialist lawyer and
              professional for your business requirements in Afghanistan.
            </p>
          </div>
          <div className='flex-1'>
            <div className='p-0 py-4 text-sm md:text-medium lg:text-base xl:text-lg'>
              Need an advisor? <br /> There’s ...
            </div>
            <Link href='/advisors/'>
              <button className='bg-primary px-4 py-2 my-4 text-white'>Find an Advisor</button>
            </Link>
          </div>
        </div>
      </section>
      <CoolFacts />
      <section className='relative pb-14 mx-4 md:px-6 py-6 md:py-14 md:my-8 font-openSans'>
        <div className='flex flex-col md:flex-row p-0 md:p-4'>
          <div className='lg:py-12 lg:px-44 lg:text-center'>
            <div className='text-sm uppercase tracking-widest text-primary'>Our Membership</div>
            <h2 className='py-4 mb-4 text-2xl capitalize font-bold relative small-line__center'>
              why join ABR?
            </h2>
            <div className='py-6'>
              <p className='text-sm md:text-medium lg:text-base xl:text-lg'>
                ABR works with and assists leading professional services firms with the growth of
                their practice. Members share referrals, development opportunities and are able to
                receive global exposure for their offered services. The structure ensures each
                member holds exclusivity for their area of expertise and jurisdiction. Ensuring
                maximum exposure and opportunity for new businesses.
              </p>
            </div>
            <div className='pt-4'>
              <button className='border-none text-primary border-b border-solid group border-current inline-block bg-transparent pointer pb-0.5 custom-transition hover:text-grey_dark_1'>
                <Link href='/membership/'>Read More</Link>
                <span className='ml-1 custom-transition group-hover:ml-2'>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
