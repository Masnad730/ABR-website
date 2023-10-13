import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  Dot,
} from 'pure-react-carousel'

import Link from 'next/link'
const Slideshow = () => {
  return (
    <section className='font-openSans'>
      <div className='relative z-0'>
        <CarouselProvider
          orientation={'horizontal'}
          naturalSlideWidth={1280}
          naturalSlideHeight={560}
          totalSlides={6}
          hasMasterSpinner={true}
          isPlaying={true}
          interval={5000}
          infinite={true}
          className='relative'
        >
          <Slider className='relative text-gray_light_2'>
            {/* Slide 1 */}
            <Slide index={0} className='text-center relative' classNameVisible='playTextTransition'>
              <Image className='carousel-img-1' hasMasterSpinner={true} />
              <div className='absolute w-full left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                <div className='text-lg md:text-2xl xl:text-4xl capitalize font-medium tracking-wide leading-6-important primary-heading'>
                  develop your brand globally
                </div>
                <button className='bg-primary text-sm md:text-base text-black rounded-sm uppercase px-4 py-2 mt-3 md:my-4 btn-animated'>
                  <Link href='/membership/'>read more</Link>
                </button>
              </div>
            </Slide>
            {/* End Slide 1 */}

            {/* Slide 2 */}
            <Slide index={1} className='text-center relative' classNameVisible='playTextTransition'>
              <Image className='carousel-img-2' hasMasterSpinner={true} />
              <div className='absolute w-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                <div className='text-lg md:text-2xl xl:text-4xl capitalize font-medium tracking-wide leading-6-important primary-heading'>
                  highest quality bespoke advice, meeting the needs of client requirements
                </div>
                <button className='bg-primary text-sm md:text-base text-black rounded-sm uppercase px-4 py-2 mt-3 md:my-4 btn-animated'>
                  <Link href='/advisors/'>find an advisor</Link>
                </button>
              </div>
            </Slide>
            {/* End Slide 2 */}

            {/* Slide 3 */}
            <Slide index={2} className='relative text-center' classNameVisible='playTextTransition'>
              <Image className='carousel-img-3' hasMasterSpinner={true} />
              <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='text-lg md:text-2xl xl:text-4xl capitalize font-medium tracking-wide leading-6-important primary-heading'>
                  receive local and international businesses
                </div>
                <button className='bg-primary text-sm md:text-base text-black rounded-sm uppercase px-4 py-2 mt-3 md:my-4 btn-animated'>
                  <Link href='/membership/'>read more</Link>
                </button>
              </div>
            </Slide>

            {/* End Slide 3 */}

            {/* Slide 4 */}
            <Slide index={3} className='relative text-center' classNameVisible='playTextTransition'>
              <Image className='carousel-img-4' hasMasterSpinner={true} />
              <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='text-lg md:text-2xl xl:text-4xl capitalize font-medium tracking-wide leading-6-important primary-heading'>
                  get local and international exposure
                </div>
                <button className='bg-primary text-sm md:text-base text-black rounded-sm uppercase px-4 py-2 mt-3 md:my-4 btn-animated'>
                  <Link href='/membership/'>read more</Link>
                </button>
              </div>
            </Slide>
            {/* End Slide 4 */}
            {/* Slide 5
            <Slide index={4} className='relative text-center' classNameVisible='playTextTransition'>
              <Image className='carousel-img-5' hasMasterSpinner={true} />
              <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='text-xl md:text-2xl xl:text-4xl capitalize font-medium tracking-wide leading-6-important primary-heading'>
                  share news and topics to local and international audience
                </div>
                <button className='bg-primary text-sm md:text-base text-black rounded-sm uppercase px-4 py-2 mt-3 md:my-4 btn-animated'>
                  <Link href='/membership/'>read more</Link>
                </button>
              </div>
            </Slide>
             End Slide 5 */}
            {/* Slide 6 */}
            <Slide index={4} className='relative text-center' classNameVisible='playTextTransition'>
              <Image className='carousel-img-6' hasMasterSpinner={true} />
              <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='text-lg md:text-2xl xl:text-4xl capitalize font-medium tracking-wide leading-6-important primary-heading'>
                  build international connections
                </div>
                <button className='bg-primary text-sm md:text-base text-black rounded-sm uppercase px-4 py-2 mt-3 md:my-4 btn-animated'>
                  <Link href='/membership/'>read more</Link>
                </button>
              </div>
            </Slide>
            {/* End Slide 6 */}
            {/* Slide 6 */}
            <Slide index={5} className='relative text-center' classNameVisible='playTextTransition'>
              <Image className='carousel-img-7' hasMasterSpinner={true} />
              <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='text-lg md:text-2xl xl:text-4xl capitalize font-medium tracking-wide leading-6-important primary-heading'>
                  highlight your skills on your own profile page
                </div>
                <button className='bg-primary text-sm md:text-base text-black rounded-sm uppercase px-4 py-2 mt-3 md:my-4 btn-animated'>
                  <Link href='/membership/'>read more</Link>
                </button>
              </div>
            </Slide>
            {/* End Slide 6 */}
          </Slider>
          <DotGroup
            showAsSelectedForCurrentSlideOnly={true}
            className='absolute min-w-full flex justify-center bottom-0 mb-2 lg:mb-4'
          >
            <Dot slide={0} className='bg-grey_dark_1 mx-1 px-3 py-0.5'></Dot>
            <Dot slide={1} className='bg-grey_dark_1 mx-1 px-3 py-0.5'></Dot>
            <Dot slide={2} className='bg-grey_dark_1 mx-1 px-3 py-0.5'></Dot>
            <Dot slide={3} className='bg-grey_dark_1 mx-1 px-3 py-0.5'></Dot>

            <Dot slide={4} className='bg-grey_dark_1 mx-1 px-3 py-0.5'></Dot>
            <Dot slide={5} className='bg-grey_dark_1 mx-1 px-3 py-0.5'></Dot>
          </DotGroup>
        </CarouselProvider>
      </div>
    </section>
  )
}
export default Slideshow
