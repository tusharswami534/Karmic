import React from "react";
import Heading from "../common/Heading";
import { HeadingLine } from "../utils/icons";
import { SERVICES_LIST } from "../utils/helper";

const Services = () => {
  return (
    <div>
      <div className="max-w-[1145px] w-full mx-auto flex flex-col">
        <Heading
          commonHeading={"Services"}
          lineClass={
            "flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          }
          headingLine={<HeadingLine />}
        />
        <div className="flex pt-[77px] max-lg:pt-16 max-md:pt-12 max-sm:pt-8 gap-y-10 flex-wrap">
          {SERVICES_LIST.map((item, index) => (
            <div
              className="w-4/12 px-[10.5px] max-lg:w-1/2 max-md:w-full"
              key={index}
            >
              <div className={`p-[22.22px] max-w-[369px] rounded-xl ${index === 1 ? 'backdrop-blur-[10px] bg-white bg-opacity-10 drop-shadow-[0_4px_20px_rgba(0,0,0,15)]' : ''}`}>
                {item.logo}
                <h3 className="font-bold text-xl leading-7 text-white max-lg:text-lg pt-5">
                  {item.heading}
                </h3>
                {item.description && (
                  <p className="max-md:text-sm text-white leading-[150%] pt-1.5">
                    {item.description}
                  </p>
                )}
                {item.list && Array.isArray(item.list) && (
                  <ul className="list-disc list-inside max-md:text-sm text-white pt-1.5">
                    {item.list.map((listItem, subIndex) => (
                      <li key={subIndex}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
