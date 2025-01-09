import React from 'react'
import Header from '../common/Header'
import BottomLine from '../assets/image/webp/hero-text-bootom-line.webp'
import TopLine from '../assets/image/webp/hero-text-top-line.webp'
import HeroImage from '../assets/image/webp/hero-image.webp'
import { ButtonArrow } from '../utils/icons'

const Hero = () => {
  return (
    <>
        <Header/>
        <div className='min-h-[726px] flex justify-center items-center max-xl:px-5 bg-hero-image bg-top bg-no-repeat'>
            <div className='max-w-[1122px] w-full gap-y-5 max-lg:py-[139px] max-md:py-[80px] flex mx-auto max-lg:flex-wrap'>
                <div className='w-7/12 max-lg:w-full'>
                  <h1 className='lg:max-w-[570px] text-white text-[64px] font-light uppercase leading-[69.54px] max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>We are believers decentralization and <span className='relative '> <img className='absolute top-0 right-0 max-w-[158px] w-full' src={TopLine} alt="topLIne" /> Web3. <img className='absolute bottom-0 left-0 max-w-[169px] w-full' src={BottomLine} alt="bottomLIne" /> </span> </h1>
                  <p className='font-normal text-base leading-[28.8px] lg:max-w-[570px] text-white pt-[13px] max-md:text-sm'>Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac. </p>
                  <div className='flex gap-8 max-lg:gap-6 max-md:gap-4 pt-10 max-lg:pt-8 max-md:pt-5'>
                      <button className='px-6 py-3 bg-white flex items-center gap-2 rounded-[82px] font-bold text-base leading-5 max-sm:text-sm max-sm:leading-4 font-sunflower'>Get Started <ButtonArrow/></button>
                      <button className='font-light font-sunflower text-base leading-5 border border-solid border-white rounded-[82px] px-8 py-3 max-sm:text-sm max-sm:leading-4 text-white'>Read More</button>
                  </div>
                </div>
                <div className='w-5/12 max-lg:w-full flex justify-end'>
                  <img className='max-w-[398px]' src={HeroImage} alt="hero-image" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
