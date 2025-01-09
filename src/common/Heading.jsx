import React from 'react'
import { HeadingLine } from '../utils/icons'

const Heading = ({commonHeading , headingLine , lineClass , headingClass}) => {
  return (
    <h2 className={`font-light text-[56px] text-white text-center uppercase font-sunflower leading-[60.68px] max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-lg:leading-[50px] max-md:leading-[40px] relative max-sm:leading-[30px] ${headingClass}`}>{commonHeading} <span className={`${lineClass}`}><HeadingLine/></span> </h2>
  )
}

export default Heading
