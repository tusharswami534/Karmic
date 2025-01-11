import React from 'react'
import Heading from '../common/Heading'
import { PROJECTS_LIST } from '../utils/helper'

const Projects = () => {
  return (
    <div className='py-24 max-md:py-10 bg-project-image bg-top max-xl:!bg-white bg-no-repeat bg-cover lg:min-h-[902px]'>
        <Heading headingClass={'!text-black'} commonHeading={"Projects"} lineClass={ "max-md:max-w-[210px] max-md:w-full flex absolute project-line top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2"}/>
            <p className='pt-6 max-w-[532px] mx-auto max-lg:pt-4 max-md:pt-3 font-normal text-base leading-[150%] text-center max-md:text-sm max-md:px-5'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
            <div className='flex max-w-[1140px] pt-[53px] max-md:pt-[30px] gap-y-6 w-full max-xl:justify-center mx-auto flex-wrap'>
            {PROJECTS_LIST.map((item , index) => (
                <div key={index} className={`w-3/12 flex max-xl:w-4/12 max-md:w-6/12 max-xl:justify-center max-xl:flex  `}>
                    <div className={`max-w-[273px] max-lg:max-w-[230px] max-sm:max-w-[150px] hover:scale-125 hover:!z-20 overflow-hidden group transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center  ${index === 0 ? 'bg-sky-blue' : ''}`}>
                        <img className={` w-full rounded-lg max-w-[273px] max-sm:max-w-[150px]`} src={item} alt={item} />
                        <div className='absolute min-h-[47px] max-md:min-h-[30px] flex justify-center items-center bg-gray transition-all duration-300 w-full group-hover:bottom-0 bottom-[-50%]'>
                            <p className='text-white text-lg max-md:text-base leading-[21px] font-bold'>Nubbies</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <button className='px-8 py-3 border border-solid mt-[53px] max-md:mt-[30px] hover:scale-125 transition-all duration-300 border-black mx-auto flex items-center rounded-[82px] font-bold text-base leading-5 max-sm:text-sm max-sm:leading-4 font-sunflower'>View All</button>
        </div>
  )
}

export default Projects