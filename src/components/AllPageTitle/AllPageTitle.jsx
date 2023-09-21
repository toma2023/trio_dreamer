import React from 'react';
import page_title from "../../../public/shop_title-bg.jpg"

const AllPageTitle = ({heading, subHeading}) => {
    return (
        <div className='relative'>
           <img className='w-full bg-cover h-[120px]' src={page_title} alt="" />
          <div className='flex items-center justify-center'>
          <h2 className=' absolute bottom-[30%] left-1/2 text-4xl font-semibold text-white'>{heading}</h2>
           <h2 className=' absolute bottom-[10%] left-1/2   text-white'>{subHeading}</h2>
          </div>
        </div>
    );
};

export default AllPageTitle;