import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'

import Layout from '../components/layout/Layout'

export default function contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await axios
      .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
        username: 'admin',
        password: 'I6FR%0^hD@Z[@',
      })
      .then(async (res) => {
        await axios
          .post(
            'https://wpbackend.navisa.af/wp-json/wp/v2/abr-usr-enquiries',
            {
              title: 'User Enquiry - Afghanistan Business Referrals',
              status: 'publish',
              fields: formData,
            },
            {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            }
          )
          .then((res) => {
            setIsLoading(false)
            if (res.status === 201) {
              setSuccessMessage('Your message has been submitted successfully.')
              setIsLoading(false)
            } else {
              setSuccessMessage('There was an error trying to send your message, Please try again.')
              setIsLoading(false)
            }
            return res.data
          })
          .catch((err) => {
            console.log(err)
            setIsLoading(false)
            setSuccessMessage(
              'There was an error trying to send your message, Please check your network connection and try again.'
            )
          })
      })
      .catch((err) => {
        console.log(err)
      })
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
    setFormData({
      full_name: '',
      email: '',
      message: '',
    })
  }
  return (
    <Layout
      title='Contact us - Afghanistan Business Referrals (ABR)'
      canonical='https://abr.af/contact/'
      descriptionContent='Contact us. Ansori Street, Shahri Now, District 10, Kabul, Afghanistan | +93 730 830 830. info@abr.af'
      active='contact'
    >
      <div className='flex flex-col py-10 px-8 md:px-16 justify-center items-center text-white background-img-2'>
        <div className='text-xl md:text-3xl mb-2 font-bold font-notoSerif'>Contact Us</div>
        <div className='text-sm font-normal capitalize text-center'>
          receive local and international businesses
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
      <div className='min-w-full py-6 px-2 md:px-8 md:py-16 lg:p-16 contact-bg-image font-openSans'>
        <div className='flex justify-center items-center py-8 px-6 lg:px-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26297.827351168566!2d69.13851069539193!3d34.52244042938139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f65b8882217%3A0x532edc38536e5878!2sAfghanistan%20Business%20Referrals!5e0!3m2!1sen!2s!4v1686638425378!5m2!1sen!2s'
            width='1280'
            height='400'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-4 mx-auto text-gray-900 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 font-notoSerif'>
          <div className='flex flex-col'>
            <div>
              <h2 className='mb-4 text-xl leading-loose text-center'>Get in Touch</h2>
              <div className='w-full mb-4'>
                <div className='w-64 h-1 py-0 mx-auto my-0 t opacity-25 gradient'></div>
              </div>
            </div>
            <div className='px-10 py-8 bg-gray-100'>
              <div className='flex flex-col mb-4'>
                <i className='flex flex-col mb-2 mr-2 not-italic'>
                  <span className='mb-2 text-base text-primary'>Address</span>
                  <span className='mb-3 text-sm text-black'>
                    Ansori Street, Shahri Now, District 10, Kabul, Afghanistan
                  </span>
                </i>
                <div className='flex flex-col lg:flex-row lg:items-center'>
                  <i className='flex flex-col mb-2 mr-2 not-italic'>
                    <span className='mb-2 text-base text-primary'>Phone</span>
                    <span className='mb-3 text-sm text-black'>+93 781 221 122</span>
                  </i>
                  <i className='flex flex-col mb-2 lg:ml-8 mr-2 not-italic'>
                    <span className='mb-2 text-base text-primary'>WhatsApp</span>
                    <span className='mb-3 text-sm text-black'>+93 730 830 830</span>
                  </i>
                </div>
                <i className='flex flex-col mr-2 not-italic'>
                  <span className='mb-2 text-base text-primary'>Email</span>
                  <span className='text-sm text-black cursor-pointer'>
                    <a href='mailto:info@abr.af'>info@abr.af</a>
                  </span>
                </i>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='text-xs md:text-sm font-medium'>
              <span>
                Full Name <span className='text-red-600 inline-block ml-1'>*</span>
              </span>
              <input
                name='full_name'
                className='w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 focus:outline-none'
                type='text'
                placeholder='Enter Full Name'
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mt-8 text-xs md:text-sm font-medium'>
              <span>
                Email<span className='text-red-600 inline-block ml-1'>*</span>
              </span>
              <input
                name='email'
                className='w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 focus:outline-none'
                type='email'
                placeholder='Enter Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mt-8 text-xs md:text-sm font-medium'>
              <span>
                Message<span className='text-red-600 inline-block ml-1'>*</span>
              </span>
              <textarea
                name='message'
                className='w-full h-32 px-4 py-2 mt-2 text-gray-900 bg-gray-100 focus:outline-none'
                placeholder='Enter Your Message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className='mt-8'>
              <button
                type='submit'
                className='mb-4 px-4 py-3 text-sm uppercase flex font-semibold bg-gray-500 focus:outline-none'
              >
                <span className={`text-white ${isLoading ? 'mr-4' : 'mr-0'}`}>send message</span>
                <span className='flex items-center justify-center'>
                  {isLoading && <Loader type='Oval' color='#fff' height={20} width={20} />}
                </span>
              </button>
              <span className='text-sm text-primary'>{successMessage}</span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
