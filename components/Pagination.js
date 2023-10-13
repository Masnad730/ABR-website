import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <section>
      <div className='flex flex-col items-start mb-4'>
        <div className='flex text-gray-700'>
          <div className='h-8 w-8 mr-1 flex justify-center items-center  cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              className='feather feather-chevron-left w-4 h-4'
            >
              <polyline points='15 18 9 12 15 6'></polyline>
            </svg>
          </div>
          <div className='flex h-8 font-medium '>
            {pageNumbers.map((pageNumber) => (
              <div
                key={pageNumber}
                className={`w-8 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in ${
                  pageNumber === currentPage ? 'border-b-2 border-secondary' : ''
                }`}
              >
                <button
                  onClick={() => paginate(pageNumber)}
                  className='border-none focus:outline-none'
                >
                  {pageNumber}
                </button>
              </div>
            ))}
          </div>
          <div className='h-8 w-8 ml-1 flex justify-center items-center  cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              className='feather feather-chevron-right w-4 h-4'
            >
              <polyline points='9 18 15 12 9 6'></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Pagination
