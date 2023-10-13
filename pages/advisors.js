import React, { useState } from 'react'
import Select from 'react-select'
import Loader from 'react-loader-spinner'

import Layout from '../components/layout/Layout'
import PracticeArea from '../components/PracticeArea'
import {
  getAllPracticeAreas,
  getPracticeArea,
  findAdvisorForPractice,
} from '../components/FetchData'

export default function advisors({ areas }) {
  const [errMsg, setErrMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [advisors, setAdvisors] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [practiceArea, setPracticeArea] = useState('')
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    setIsClicked(true)
    setAdvisors(null)
    setErrMsg('')
  }
  const handleClick = async () => {
    let advisors
    if (selectedOption && isClicked) {
      setErrMsg('')
      setIsLoading(true)
      try {
        advisors = await findAdvisorForPractice(selectedOption.label)
        setAdvisors(advisors)
        setIsLoading(false)
      } catch (error) {
        setErrMsg('an error occurred, please try again')
        setIsLoading(false)
      }
      //const practiceArea = allPracticeAreas.find((area) => area.id === selectedOption.value)
    } else {
      setErrMsg('Please select an expertise')
    }
  }
  return (
    <Layout
      title='Find an Advisor - Afghanistan Business Referrals (ABR)'
      descriptionContent='ABR members represent Afghanistan leading legal, accountancy and financial advisers. Each member is recommended exclusively by jurisdiction and practice area expertise.'
      canonical='https://abr.af/advisor/'
      active='find an advisor'
    >
      <div className='min-w-full bg-gray_light_2 font-openSans'>
        {/* Bread Crumbs
        <nav className='p-2 md:p-4 py-2 text-xs sm:text-sm flex items-center font-openSans'>
          <ul className='inline-flex items-center justify-center p-0 ml-2 list-none'>
            <i className='fas fa-home mr-2'></i>
            <li className='inline-flex flex-wrap items-center'>
              <span>You are here</span>
              <svg className='w-3 h-3 mx-2 fill-current' viewBox='0 0 320 512'>
                <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z' />
              </svg>
              <span>Home</span>
              <svg className='w-3 h-3 mx-2 fill-current' viewBox='0 0 320 512'>
                <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z' />
              </svg>
              <span>Find Advisor</span>
            </li>
          </ul>
        </nav>
         End Bread Crumbs */}
        <div className='pb-7 md:pb-14 pt-12 md:pt-24'>
          <div className='flex flex-col p-4 m-8 mb-0 border border-gray-300 border-solid md:p-12'>
            <h1 className='text-2xl font-semibold sm:text-3xl'>Find an Advisor</h1>
            <div className='mt-4 text-sm md:text-medium lg:text-base xl:text-lg'>
              Please use the search function below to find the right adviser to meet your needs
            </div>
            <div className='items-center mt-2 flex flex-col md:flex-row'>
              <div className='w-full md:w-64'>
                <Select
                  value={selectedOption}
                  onChange={handleChange}
                  options={areas}
                  isClearable
                  menuPlacement='auto'
                  isSearchable
                />
              </div>
              <div className='w-full md:w-max mt-4 flex items-center justify-center text-white bg-gray-700 md:mt-0 sm:ml-4'>
                <button
                  onClick={handleClick}
                  className='flex items-center justify-items-center px-8 py-1.5 outline-none border-none focus:outline-none'
                >
                  <span className={`${isLoading ? 'mr-4' : 'mr-0'}`}>Search</span>
                  <span className='flex items-center justify-center'>
                    {isLoading && <Loader type='Oval' color='#fff' height={20} width={20} />}
                  </span>
                </button>
              </div>
            </div>
            <div className='text-primary text-medium mt-2'>{errMsg}</div>
          </div>
        </div>
      </div>
      {advisors && (
        <PracticeArea
          advisors={advisors}
          isClicked={isClicked}
          practiceArea={selectedOption.label}
        />
      )}
    </Layout>
  )
}

export async function getStaticProps(context) {
  const allPracticeAreas = await getAllPracticeAreas()
  const areas = allPracticeAreas.map((area) => ({
    value: area.id,
    label: area.acf.practice_area,
  }))
  return {
    props: { areas },
  }
}
