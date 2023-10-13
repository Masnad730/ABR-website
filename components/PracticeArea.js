import React from 'react'
import Link from 'next/link'

const PracticeArea = ({ advisors, practiceArea }) => {
  return (
    <div className='min-w-full bg-gray_light_2 font-openSans'>
      <div className='flex min-w-full px-4 lg:max-w-full'>
        <div className='flex-col flex-1 px-0 sm:px-8 py-12'>
          <div className='my-6 text-base sm:text-lg text-gray-700'>{`You searched for ${practiceArea}`}</div>
          {/* Card */}
          {advisors.length === 0 && <div>No advisor Found</div>}
          {advisors.length > 0 &&
            advisors.map((advisor) => (
              <div
                key={advisor.id}
                className='flex flex-col sm:flex-row w-full my-6 bg-white rounded-md shadow'
              >
                <div className='flex-1 flex items-center justify-center p-4 cursor-pointer'>
                  <Link href='/advisor/[advisor]/' as={`/advisor/${advisor.slug}`} passHref>
                    <a target='_blank'>
                      <img
                        alt={advisor.acf.firm_logo.name}
                        src={advisor.acf.firm_logo?.sizes?.medium ?? ''}
                        className='w-28 md:w-36 lg:w-40 object-contain'
                      />
                    </a>
                  </Link>
                </div>

                <div className='flex-4 px-3 sm:px-8 py-4 border-l border-gray-200 border-solid'>
                  <h3 className='flex-auto text-lg sm:text-xl mb-2 font-bold font-notoSerif text-blue'>
                    {advisor.acf.firm_name}
                  </h3>

                  <div className='pb-4 border-b border-gray-200'>
                    <div className='text-sm'>
                      <span className='text-sm md:text-medium lg:text-base font-semibold'>
                        Contact Person:
                      </span>{' '}
                      &nbsp;
                      <span className='text-sm md:text-medium lg:text-base'>
                        {advisor.acf.contact_person}
                      </span>
                    </div>
                    <div className='text-sm'>
                      <span className='text-sm md:text-medium lg:text-base font-semibold'>
                        {' '}
                        Expertise:
                      </span>{' '}
                      &nbsp;
                      <span className='text-sm md:text-medium lg:text-base'>{practiceArea}</span>
                    </div>
                    <div className='text-sm'>
                      <span className='text-sm md:text-medium lg:text-base font-semibold'>
                        City:
                      </span>{' '}
                      &nbsp;
                      <span className='text-sm md:text-medium lg:text-base'>
                        {advisor.acf.citys}
                      </span>
                    </div>
                    <div className='mt-6'>
                      <div className='text-sm'>
                        <span className='font-semibold'>Telephone:</span> &nbsp;
                        <span className='cursor-pointer hover:underline'>
                          {advisor.acf.phone_number}
                        </span>
                      </div>
                      <div className='text-sm'>
                        <span className='font-semibold'>Email:</span> &nbsp;
                        <span className='cursor-pointer hover:underline'>{advisor.acf.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-end my-2'>
                    <button className='border-none text-primary border-b border-solid group border-current inline-block bg-transparent pointer pb-0.5 custom-transition hover:text-grey_dark_1'>
                      <Link href='/advisor/[advisor]/' as={`/advisor/${advisor.slug}`} passHref>
                        <a target='_blank'>View Profile</a>
                      </Link>
                      <span className='ml-1 custom-transition group-hover:ml-2'>&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* End Card */}
        </div>
      </div>
    </div>
  )
}
export default PracticeArea
