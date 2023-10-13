import React from 'react'
import AnimatedNumber from 'animated-number-react'

const url = '/images/sprite.svg'
const CoolFacts = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 coolfact-bg-image px-7 md:px-9 lg:px-14 md:flex-row'>
      <div className='flex flex-col items-center justify-center flex-1 w-full pb-8 text-white md:pb-0'>
        <svg fill='currentColor' className='inline-flex self-center w-16 h-16 p-0 m-0 mb-8 flex-'>
          <use xlinkHref={`${url}#advice`} />
        </svg>
        <div className='mb-4 text-6xl font-medium'>
          <AnimatedNumber duration='4000' value='10' formatValue={(v) => v.toFixed(0)} />
        </div>
        <div className='text-base text font-medium text-primary_light_2 font-openSans tracking-widest uppercase'>
          Advisors
        </div>
      </div>
      <div className='flex flex-col items-center justify-center flex-1 w-full pb-8 -mt-1 text-white md:pb-0 font-notoSerif'>
        <svg fill='currentColor' className='inline-flex self-center w-16 h-16 p-0 m-0 mb-8 flex-'>
          <use xlinkHref={`${url}#planing`} />
        </svg>
        <div className='mb-4 text-6xl font-medium'>
          <AnimatedNumber duration='4000' value='19' formatValue={(v) => v.toFixed(0)} />
        </div>
        <div className='text-base text font-medium text-primary_light_2 font-openSans tracking-widest uppercase'>
          Practice Area
        </div>
      </div>
      <div className='flex flex-col items-center justify-center flex-1 w-full text-white'>
        <svg fill='currentColor' className='inline-flex self-center w-16 h-16 p-0 m-0 mb-8 flex-'>
          <use xlinkHref={`${url}#collaboration`} />
        </svg>
        <div className='mb-4 text-6xl font-medium'>
          <AnimatedNumber duration='4000' value='26' formatValue={(v) => v.toFixed(0)} />
        </div>
        <div className='text-base text font-medium text-primary_light_2 font-openSans tracking-widest uppercase'>
          Referrals
        </div>
      </div>
    </div>
  )
}
export default CoolFacts
