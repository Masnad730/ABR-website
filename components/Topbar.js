import React from 'react'

const url = '/images/sprite.svg'
const Topbar = () => {
  return (
    <div className='flex-col flex-1 hidden sm:flex bg-gray_light_1 font-openSans'>
      <nav className='flex justify-between h-10 px-12 border-b font-medium text-gray-900'>
        <ul className='flex items-center'>
          <li className='flex items-center justify-center text-sm'>
            <span className='flex items-center justify-center mr-4 not-italic'>
              <i className='flaticon-phone-call mr-1 flex items-center'></i>
              +93 781 221 122
            </span>
            <span className='flex items-center justify-center mr-4 not-italic'>
              <i className='flaticon-email mr-1 flex items-center'></i>
              info@abr.af
            </span>
          </li>
        </ul>

        <ul className='flex items-center'>
          <li className='mr-4 last:mr-0'>
            <a
              href='https://www.facebook.com/Afghanistan-Business-Referrals-109269684063502/'
              target='blank'
            >
              <svg fill='currentColor' className='w-4 h-4 fill-current'>
                <use xlinkHref={`${url}#facebook`} />
              </svg>
            </a>
          </li>
          <li className='mr-4 last:mr-0'>
            <a href='#'>
              <svg fill='currentColor' className='w-4 h-4 fill-current'>
                <use xlinkHref={`${url}#twitter`} />
              </svg>
            </a>
          </li>
          <li className='mr-4 last:mr-0'>
            <a href='#'>
              <svg fill='currentColor' className='w-4 h-4 fill-current'>
                <use xlinkHref={`${url}#youtube`} />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Topbar
