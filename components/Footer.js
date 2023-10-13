import React, { useState } from 'react'
import Link from 'next/link'
import Loader from 'react-loader-spinner'
import axios from 'axios'

const url = '/images/sprite.svg'
const Footer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await axios
      .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
        username: 'admin',
        password: 'I6FR%0^hD@Z[@',
      })
      .then(async (res) => {
        console.log(res.data.token)
        await axios
          .post(
            'https://wpbackend.navisa.af/wp-json/wp/v2/abr-subscribed-email',
            {
              title: 'Email Subscription - Afghanistan Business Referrals',
              status: 'publish',
              fields: {
                email: email,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            }
          )
          .then((res) => {
            console.log(res)
            setIsLoading(false)
            if (res.status === 201) {
              setSuccessMessage('Your email is registered successfully')
            } else {
              setSuccessMessage('Your email is not registered, please try again')
            }
          })
          .catch((err) => {
            console.log(err)
            setIsLoading(false)
            setSuccessMessage('Your email is not registered, please try again')
          })
      })
      .catch((err) => {
        console.log(err)
      })
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)

    setEmail('')
  }
  return (
    <footer className='bg-gray-300 text-gray-900 font-openSans'>
      <div className='px-4 md:px-6 lg:px-12 py-14 pb-4'>
        <div className='flex flex-col md:flex-row flex-wrap'>
          <div className='md:flex-container-50 lg:flex-2 flex flex-col items-center mb-6 lg:mb-0 mr-0 lg:mr-8 last:mr-0'>
            <div>
              <h3 className='mb-4 text-base font-semibold'>About Us</h3>
              <p className='text-sm md:text-medium lg:text-base leading-6-important'>
                Afghanistan Business Referrals (ABR) is a multi-disciplinary professional services
                network that provides legal, accountancy, financial advice to companies and
                individuals in the jurisdiction of Afghanistan.
              </p>
            </div>
          </div>
          <div className='md:flex-container-50 lg:flex-1 flex flex-col xl:items-center mb-6 lg:mb-0 mr-0 lg:mr-8 last:mr-0'>
            <div>
              <div className='mb-4 text-base font-semibold'>Quick Links</div>
              <ul>
                <li className='mb-2 last:mb-0 text-sm md:text-medium lg:text-base'>
                  <Link href='/about/'>About Us</Link>
                </li>
                <li className='mb-2 last:mb-0 text-sm md:text-medium lg:text-base'>
                  <Link href='/advisors/'>Find an Advisor</Link>
                </li>
                <li className='mb-2 last:mb-0 text-sm md:text-medium lg:text-base'>
                  <Link href='/membership/'>Our Membership</Link>
                </li>
                <li className='mb-2 last:mb-0 text-sm md:text-medium lg:text-base'>
                  <Link href='/contact/'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='md:flex-container-50 lg:flex-1 text-sm mb-6 lg:mb-0 mr-0 lg:mr-8 last:mr-0'>
            <div className='mb-4 text-base font-semibold'>Newsletter</div>
            <div className='text-sm md:text-medium lg:text-base'>Subscribe to our newsletter</div>
            <div>
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='flex my-4'>
                  <input
                    type='email'
                    name='email'
                    className='py-2 px-3 border-none focus:outline-none'
                    placeholder='your@mail.com'
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <button
                    className='py-2 px-2 text-sm flex uppercase focus:outline-none border-none text-white bg-black lg:px-4'
                    type='submit'
                  >
                    <span className={`${isLoading ? 'mr-4' : 'mr-0'}`}>subscribe</span>
                    <span className='flex items-center justify-center'>
                      {isLoading && <Loader type='Oval' color='#fff' height={15} width={15} />}
                    </span>
                  </button>
                </div>
                <span className='text-sm text-primary'>{successMessage}</span>
              </form>
            </div>
          </div>
          <div className='md:flex-container-50 lg:flex-1 flex flex-col mb-6 lg:mb-0 mr-0 lg:mr-8 last:mr-0'>
            <div className='mb-4 text-base font-semibold'>Contact Us</div>
            <address>
              <ul className='list-none flex flex-col'>
                <li className='flex mb-2 last:mb-0 text-sm md:text-medium lg:text-base'>
                  <i className='flaticon-pin mr-3 text-secondary_dark_2'></i>
                  <span className='not-italic'>
                    Ansori Street, Shahri Now, District 10, Kabul, Afghanistan
                  </span>
                </li>
                <li className='flex mb-2 last:mb-0 text-sm md:text-medium lg:text-base'>
                  <i className='flaticon-phone-call mr-3 text-secondary_dark_2'></i>
                  <span className='not-italic'>+93 781 221 122</span>
                </li>
                <li className='flex items-center mb-2 last:mb-0'>
                  <i className='fab fa-whatsapp mr-3 text-secondary_dark_2 text-sm md:text-medium lg:text-lg'></i>
                  <span className='not-italic'>+93 730 830 830</span>
                </li>
                <li className='flex mb-2 last:mb-0 text-sm md:text-medium lg:text-base'>
                  <i className='flaticon-email mr-3 text-secondary_dark_2'></i>
                  <span className='not-italic'>
                    <a href='mailto:info@abr.af'>info@abr.af</a>
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div className='flex py-6 text-xs text-gray_light_1'>
          <a
            className='flex items-center justify-between uppercase p-2 bg-red-700 hover:bg-red-900 mr-2 last:mr-0'
            href='/ABR-BROCHURE.pdf'
            target='_blank'
          >
            firm brochure
            <span className='inline-flex items-center justify-center w-4 h-4 ml-2'>
              <svg fill='currentColor' className='w-full h-full p-0 m-0'>
                <use xlinkHref={`${url}#pdf`} />
              </svg>
            </span>
          </a>
          <a
            className='flex items-center justify-between uppercase p-2 bg-red-700 hover:bg-red-900 mr-2 last:mr-0'
            href='/ABR-BROCHURE-DARI.pdf'
            target='_blank'
          >
            firm brochure - dari
            <span className='inline-flex items-center justify-center w-4 h-4 ml-2'>
              <svg fill='currentColor' className='w-full h-full p-0 m-0'>
                <use xlinkHref={`${url}#pdf`} />
              </svg>
            </span>
          </a>
        </div>
        <hr className='border-grey_dark_3 my-6' />
        <div className='flex justify-center items-center'>
          <div className='text-sm pb-2'>
            Copyright © Afghanistan Business Referrals {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
