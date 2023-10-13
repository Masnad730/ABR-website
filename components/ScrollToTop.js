import React, { useState, useEffect } from 'react'

const url = '/images/sprite.svg'
const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }
  return (
    <>
      {show && (
        <div>
          <svg
            fill='currentColor'
            className='w-8 h-8 outline-none fixed bottom-6 z-10 cursor-pointer opacity-80 right-4 hover:opacity-100 custom-transition scroll-top'
            onClick={handleClick}
          >
            <use xlinkHref={`${url}#up-arrow-circle`} />
          </svg>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
