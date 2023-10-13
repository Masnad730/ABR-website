import React, { useState } from 'react'
import Link from 'next/link'

const Header = ({ active }) => {
  const [showSearchBar, setShowSearhBar] = useState(false)

  const onSearchClick = () => setShowSearhBar(!showSearchBar)
  const onCloseClick = () => setShowSearhBar(!showSearchBar)

  const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleInputChange = (e) => setSearchTerm(e.target.value)
    const handleSubmit = (e) => {}
    return (
      <div className='bg-gray_light_2 flex items-center justify-between px-8 absolute left-0 top-auto right-0 w-full z-50 transition-all'>
        <div className='text-base flex-1'>
          <form onSubmit={handleSubmit} method='GET'>
            <div className='my-8 lg:mx-96 flex items-center justify-center'>
              <input
                name='q'
                type='text'
                placeholder='Enter your keywords...'
                className='text-base w-full p-2 bg-transparent border-b border-grey_dark_2 border-solid placeholder-grey_dark_3 focus:outline-none focus:bg-transparent'
                value={searchTerm}
                onChange={handleInputChange}
                required
              />
              <button type='submit' className='border-none focus:outline-none'>
                <i className='flaticon-loupe -ml-5' />
              </button>
            </div>
          </form>
        </div>
        <div className='text-2xl'>
          <button title='Close (Esc)' type='button' onClick={onCloseClick}>
            ×
          </button>
        </div>
      </div>
    )
  }

  return (
    <header className='relative z-10 top-0 left-0 bg-white p-0 m-0 min-w-full transition-all font-openSans border-b border-gray_light_3'>
      <div className='flex items-center justify-between md:px-6 lg:px-10 px-8'>
        <label htmlFor='menu-toggle' className='hidden pointer-cursor menu-toggle'>
          <svg
            className='fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
          >
            <title>menu-toggle</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
          </svg>
        </label>
        <div className='py-3 w-20 md:w-28'>
          <Link href='/'>
            <img
              className='object-contain w-full last:max-w-none'
              src='/images/abr-logo.png'
              alt='Afghanistan Business'
            />
          </Link>
        </div>
        <input className='hidden' type='checkbox' id='menu-toggle' />
        <nav className='text-sm md:text-medium self-stretch flex text-gray-800 navbar'>
          <label
            htmlFor='menu-toggle'
            className='hidden absolute top-6 right-4 pointer-cursor text-white menu-toggle'
          >
            <svg className='fill-current' width='30' height='30' viewBox='0 0 20 20'>
              <title>cancel-menu</title>
              <path d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z'></path>
            </svg>
          </label>
          <ul className='p-0 m-0 uppercase list-none inline-flex lg:-mr-64 xl:-mr-128'>
            <li className='mx-3.5 flex items-center justify-center relative border-hover__transition'>
              <Link href='/' passHref>
                <a
                  className={`${
                    active === 'home' ? 'text-secondary' : ''
                  } hover:text-secondary transition-all`}
                >
                  home
                </a>
              </Link>
            </li>
            <li className='mx-3.5 flex items-center justify-center relative border-hover__transition'>
              <Link href='/advisors/' passHref>
                <a
                  className={`${
                    active === 'find an advisor' ? 'text-secondary' : ''
                  } hover:text-secondary transition-all`}
                >
                  find an advisor
                </a>
              </Link>
            </li>
            <li className='mx-3.5 flex items-center justify-center relative border-hover__transition'>
              <Link href='/news-topics/' passHref>
                <a
                  className={`${
                    active === 'news and topic' ? 'text-secondary' : ''
                  } hover:text-secondary transition-all`}
                >
                  news and topic
                </a>
              </Link>
            </li>
            <li className='mx-3.5 relative group hidden items-center justify-center lg:inline-flex border-hover__transition'>
              <a
                className={`${
                  active === 'about' ? 'text-secondary' : ''
                } hover:text-secondary transition-all`}
                href='#'
              >
                about
              </a>
              <div className='inline-flex justify-center items-center'>
                <svg className='w-4 h-4 ml-1 fill-current' viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                </svg>
              </div>
              <ul className='bg-white text-black absolute z-50 list-none left-0 top-24 invisible opacity-0 rounded border-5 border-gray_light_2 group-hover:opacity-100 group-hover:visible group-hover:top-22 drop-menu custom-transition'>
                <li className='m-4 pr-12 pb-1 border-b border-gray_dark_2'>
                  <Link href='/about/' passHref>
                    <a className='block hover:text-secondary'>about ABR</a>
                  </Link>
                </li>
                <li className='m-4 pr-12 pb-1 border-b border-gray_dark_2'>
                  <Link href='/membership/' passHref>
                    <a className='block hover:text-secondary'>membership</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Menus for Mobile and Tablet */}
            <li className='px-3.5 py-2 hidden text-center sub-menu'>
              <Link href='/about/' passHref>
                <a className='hover:text-secondary'>about ABR</a>
              </Link>
            </li>
            <li className='px-3.5 py-2 hidden text-center sub-menu'>
              <Link href='/membership/' passHref>
                <a className='hover:text-secondary'>membership</a>
              </Link>
            </li>
            {/* End Menus for Mobile and Tablet */}
            <li className='mx-3.5 flex items-center justify-center relative border-hover__transition'>
              <Link href='/contact' passHref>
                <a
                  className={`${
                    active === 'contact' ? 'text-secondary' : ''
                  } hover:text-secondary transition-all`}
                >
                  contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={onSearchClick}
          className='flex items-center justify-center focus:outline-none border-none'
        >
          <span className='flex items-center justify-center'>
            <i className='flaticon-loupe mx-3.5'></i>
          </span>
        </button>
      </div>
      <div className='transition-all'>{showSearchBar && <SearchBar />}</div>
    </header>
  )
}
export default Header
