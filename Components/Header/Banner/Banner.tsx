import React from 'react'
import Header from '../Header/Header';

export default function Banner() {
    return (

        <div className='h-screen'>
            <Header />
            <div className='flex flex-col gap-y-5 md:flex-row md:justify-between h-[80%] m-5 md:m-14 '>
                <div className='w-full  h-[573px] bg-cover bg-center md:hidden justify-center flex items-center rounded-tl-[128px] rounded-br-[128px]'
                    style={{ backgroundImage: `url('/Images/banner_2.png')` }}
                >
                    <div className='w-[380px] h-[525px]  border border-5 m-5 border-white rounded-tl-[128px] rounded-br-[128px]'></div>
                </div>
                <div className='md:w-1/2 flex gap-y-3 p-4 flex-col md:pt-3 justify-center items-center md:gap-y-5 md:items-start'>
                    <h1 className=' md:h-[162px] font-serif font-bold leading-snug  text-3xl md:text-[44px]  '>
                        IMPECCABLE CRAFTSMANSHIP AND FINESSE
                    </h1>
                    <p className='md:w-[798px] md:h-36 md:text-[29px] mb-2 font-medium text-md  text-[#787054]'>
                        An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                    </p>
                    <button className='md:text-[25px] text-lg font-medium md:w-[274px] md:h-[49px]  bg-[#A29875] text-white md:p-2 py-2 px-5 rounded-lg '>
                        Explore Now</button>
                </div>
                <div className='w-[421px] h-[573px] bg-cover bg-center hidden md:flex justify-center items-center rounded-tl-[128px] rounded-br-[128px]'
                    style={{ backgroundImage: `url('/Images/banner_2.png')` }}
                >
                    <div className='w-[380px] h-[525px]  border border-5 m-5 border-white rounded-tl-[128px] rounded-br-[128px]'>

                    </div>
                </div>
            </div>
        </div>
    )
}
