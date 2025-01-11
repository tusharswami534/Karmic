import React from 'react'
import Heading from '../common/Heading'
import { HeadingLine } from '../utils/icons'
import { UPCOMING_PROJECTS } from '../utils/helper'

const UpcomingProjects = () => {
  return (
    <div className='pt-[95px] max-sm:pt-20 max-md:pt-[85px] max-lg:pt-[90px] flex justify-center flex-col items-center'>
        <Heading commonHeading={'Upcoming Projects'} lineClass={'flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:max-w-[210px] max-md:w-full'} headingLine={<HeadingLine/>}/>
        <div className='max-w-[1140px] w-full  max-xl:gap-[29px] max-lg:gap-5 max-xl:justify-center max-xl:flex-wrap mx-auto flex justify-between py-12 max-lg:py-10 max-md:py-8 max-sm:py-6 items-center'>
            {UPCOMING_PROJECTS.map((item , index) => (
              <div key={index} className='max-w-[263px] border-solid border-white border-opacity-10 border bg-light-black w-full rounded-xl p-4'>
                <div className='overflow-hidden rounded-lg group '>
                  <img className='rounded-lg group-hover:scale-150 transition-all duration-500' src={item.image} alt="card-image" />
                  </div>
                  <div className='flex w-full pt-[15px] justify-between items-center'>
                    <p className='text-white text-xl max-md:text-lg'>{item.name}</p>
                    <p className='text-white text-base font-bold leading-5 max-md:text-sm max-md:leading-4'>{item.time}</p>
                  </div>
                  <p className='font-light text-base leading-7 text-white  max-md:text-sm max-md:leading-6 max-sm:leading-5'>
                    {item.type}
                  </p>
              </div>
            ))}
        </div>
        <button className='font-medium font-sunflower hover:scale-125 transition-all duration-300 text-base leading-5 border border-solid border-white rounded-[82px] px-8 py-3 max-md:text-sm max-md:leading-4 text-white'>View All</button>
    </div>
  )
}

export default UpcomingProjects
