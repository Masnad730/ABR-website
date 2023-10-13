import Link from 'next/link'

import Layout from '../../components/layout/Layout'
import { getAdvisors } from '../../components/FetchData'

const url = '/images/sprite.svg'
export default function Advisor({ advisor }) {
  return (
    <Layout
      title={`${advisor.acf.practice_area.map((area) => area.post_title)} | ${
        advisor.acf.firm_name
      } - ABR`}
      canonical={`https://abr.af/advisor/${advisor.slug}`}
      descriptionContent={advisor.acf.firm_profile.substring(0, 160)}
    >
      <div className='min-w-full box-border font-notoSerif'>
        <div className='flex items-center h-48 background-img'>
          <div className='mx-10'>
            <div className='text-xl font-bold text-white sm:text-2xl'>{advisor.acf.firm_name}</div>
          </div>
        </div>

        {/* Bread Crumbs
        <nav className='py-6 text-xs sm:text-sm flex items-center text-black bg-white font-openSans'>
          <ul className='inline-flex p-0 ml-2 list-none items-center justify-center'>
            <i className='fas fa-home text-sm mr-2'></i>
            <li className='inline-flex flex-wrap items-center'>
              <Link href='/'>Home</Link>
              <svg className='w-3 h-3 mx-2 fill-current' viewBox='0 0 320 512'>
                <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z' />
              </svg>
              <Link href='/advisor/'>Advisor</Link>
              <svg className='w-3 h-3 mx-2 fill-current' viewBox='0 0 320 512'>
                <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z' />
              </svg>
              <span className='text-gray-500'>{advisor.acf.firm_name}</span>
            </li>
          </ul>
        </nav>
        {/* End Bread Crumbs */}

        <main className='flex flex-col justify-center py-20 px-2 lg:px-0 lg:flex-row'>
          <div className='flex-1 max-w-full flex flex-col items-center px-8 mb-8 lg:mb-0 bg-white lg:self-auto lg:px-4'>
            <img
              className='w-32 md:w-36 lg:w-44 object-cover h-auto'
              src={advisor.acf.firm_logo.sizes?.medium ?? ''}
              alt={advisor.acf.firm_logo.name}
            />
            <div className='mt-10 flex flex-col items-center justify-center'>
              <div className='relative mb-2 text-lg text-center underline-after'>
                {advisor.acf.firm_name}
              </div>
              <div className='flex flex-col items-center justify-center mb-2 text-sm'>
                <div>Founder</div>
                <div>{advisor.acf.contact_person}</div>
              </div>
            </div>
            <div className='flex items-center justify-center text-sm font-medium text-white uppercase'>
              <div className='flex items-center justify-center px-4 py-2 mx-1 my-2 bg-red-700 hover:bg-red-900'>
                <Link href={advisor.acf.website} passHref>
                  website
                </Link>
              </div>
              <div className='flex items-center justify-between px-4 py-2 mx-1 my-2 bg-red-700 hover:bg-red-900'>
                <Link href={`/advisor/[advisor]/`} as={`/advisor/${advisor.slug}/`} passHref>
                  <a>brochure</a>
                </Link>
                <span className='inline-flex items-center justify-center w-5 h-5 ml-2'>
                  <svg fill='currentColor' className='w-full h-full p-0 m-0'>
                    <use xlinkHref={`${url}#pdf`} />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className='flex-2 max-w-full flex flex-col px-4 pt-0 mb-8 lg:mb-0 text-sm bg-white md:text-base'>
            <h1 className='p-0 lg:mx-4 pb-1 text-base font-bold md:text-lg'>Profile</h1>
            <div
              className='p-0 lg:p-4 text-sm md:text-medium lg:text-base text-justify font-openSans whitespace-pre-wrap'
              dangerouslySetInnerHTML={{ __html: advisor.acf.firm_profile }}
            ></div>
          </div>
          <div className='flex-1 max-w-full flex flex-col px-4 mb-8 lg:mb-0 text-sm bg-white md:px-4 lg:border-l'>
            <div className='flex flex-col max-w-full font-openSans'>
              <div className='text-sm md:text-medium lg:text-base xl:text-lg font-notoSerif font-medium text-red-700'>
                Expertise
              </div>
              <ul className='p-0 m-0 mt-3 ml-3 mb-4 list-none'>
                {advisor.acf.practice_area.map((area) => (
                  <li className='hyphen-bullet text-sm md:text-medium lg:text-base'>
                    {area.post_title}
                  </li>
                ))}
              </ul>
              <div className='text-sm md:text-medium lg:text-base xl:text-lg font-notoSerif font-medium text-red-700'>
                Languages
              </div>
              <ul className='p-0 m-0 mt-3 ml-3 mb-4 list-none'>
                {advisor.acf.service_languages.length >= 1
                  ? advisor.acf.service_languages.map((each) => (
                      <li className='hyphen-bullet text-sm md:text-medium lg:text-base'>
                        {each.post_title}
                      </li>
                    ))
                  : ''}
              </ul>
            </div>
            <div className='flex flex-col max-w-full'>
              <div className='text-sm md:text-medium lg:text-base xl:text-lg font-notoSerif font-medium text-red-700'>
                Contact
              </div>
              <div className='flex p-0 m-0 mt-3 mb-4'>
                <ul className='p-0 ml-3 flex flex-col'>
                  <li className='flex mb-1 last:mb-0'>
                    <div className='text-gray-700'>
                      <i className='flaticon-phone-call mr-3'></i>
                    </div>
                    <div className='text-sm md:text-medium lg:text-base'>
                      {advisor.acf.phone_number}
                    </div>
                  </li>
                  <li className='flex mb-1 last:mb-0'>
                    <div className='text-gray-700'>
                      <i className='flaticon-pin mr-3'></i>
                    </div>
                    <div className='text-sm md:text-medium lg:text-base'>{`${advisor.acf.state}, ${advisor.acf.citys}`}</div>
                  </li>
                  <li className='flex mb-1 last:mb-0'>
                    <div className='text-gray-700'>
                      <i className='flaticon-email mr-3'></i>
                    </div>
                    <div className='text-sm md:text-medium lg:text-base'>
                      <a className='underline' href='mailto:info.divanlawfirm@gmail.com'>
                        {advisor.acf.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
export const getStaticPaths = async () => {
  const advisors = await getAdvisors()
  const paths = advisors.map((advisor) => ({
    params: { slug: advisor.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const advisors = await getAdvisors()
  const advisor = advisors.find((advisor) => advisor.slug === params.slug)
  return {
    props: {
      advisor,
    },
  }
}
