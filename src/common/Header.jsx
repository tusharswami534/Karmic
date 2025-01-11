import React, { useEffect, useState } from "react";
import {  HEADER_LIST } from "../utils/helper";
import { PageLogo } from "../utils/icons";
import HeroShadow from '../assets/image/png/hero-top-shadow.png'

const Header = () => {
  const [open , setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <div className="relative px-5 pt-[11px] max-xl:pt-5">
      <img className="absolute top-0 left-0" src={HeroShadow} alt="shadow" />
      <div className="max-w-[1140px] flex justify-between items-center mx-auto">
        <a className="page-logo relative z-10" href="/">
         <PageLogo/>
        </a>
        <div
          className={`flex justify-center gap-8 items-center max-lg:flex-col max-lg:items-center max-lg:w-full max-lg:h-full max-lg:bg-black z-40 max-lg:fixed max-lg:top-0 max-lg:left-full max-lg:transition-all max-lg:duration-300 ${ open ? 'max-lg:!left-0' : ''}`}
        >
          {HEADER_LIST.map((item, index) => (
            <a onClick={() => setOpen(false)}
              className="text-white font-sunflower text-base max-lg:text-lg leading-[20px] max-lg:leading-6 hover:scale-105 transition-all duration-300"
              key={index}
              href={item.link}
            >
              {item.name}
            </a>
          ))}
          <button className="font-bold font-sunflower hover:scale-110 transition-all duration-300 lg:hidden relative px-8 overflow-hidden py-3 max-md:py-2 max-md:px-6 text-base max-sm:text-sm bg-white rounded-[82px] leading-5 max-sm:leading-4">
        Connect Wallet</button>
        </div>
        <button className="font-bold font-sunflower hover:scale-110 transition-all duration-300 max-lg:hidden relative px-8 overflow-hidden py-3 max-md:py-2 max-md:px-6 text-base max-sm:text-sm bg-white rounded-[82px] leading-5 max-sm:leading-4">
        Connect Wallet
    
        </button>
        <button
          onClick={handleOpen}
          className="overflow-hidden relative z-50 lg:hidden size-6 flex flex-col justify-between items-center"s
        >
          <span
            className={`bg-white rounded-md w-6 h-0.5 block transition-all duration-300 ${
              open ? "translate-x-10" : ""
            }`}
          ></span>
          <span
            className={`bg-white rounded-md after:rounded-lg w-6 h-0.5 block relative after:bg-white after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90" : ""
            }`}
          ></span>
          <span
            className={`bg-white rounded-md w-6 h-0.5 block transition-all duration-300 ${
              open ? "-translate-x-10" : ""
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Header;

