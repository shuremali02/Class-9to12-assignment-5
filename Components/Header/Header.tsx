import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='h-[20%] w-[100%] bg-[#A29875] flex items-center'>
      <div className='h-[87px] flex items-center '>
        <div className='w-[242px] flex py-[11] items-center text-white px-7'>
          <h1>
            <Image
              src={"/images/Logo.png"}
              alt='Logo Image'
              height={70}
              width={63}
            />
          </h1>
          <h1 className='w-[174px] h-[83px] flex items-center text-[50px]'>urity</h1>
        </div>
        <div className='h-14 w-[769px] px-3 top-[39px] left-[431px] rounded-[13px]
         hidden  bg-neutral-100 md:flex justify-between items-center'>
     <div className="hidden md:flex items-center h-[40px] w-full max-w-[769px] bg-neutral-100 rounded-md ml-4 px-3">
          <input
            type="search"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
            className="flex-1 px-4 text-sm text-gray-600 bg-transparent outline-none"
          />
          <Image
            src={"/images/search.png"}
            alt="search-icon"
            width={20}
            height={20}
          />
        </div>
        </div>

        <div className='w-[177px] h-[30px]  top-13 ml-28'>
          <div className='flex gap-[38px]'>
            <p>
              <Image
                src={"/images/heart.png"}
                alt='heart-icon'
                width={33}
                height={29}
              />
            </p>
            <p>
              <Image
                src={"/images/user.png"}
                alt='user-icon'
                width={29}
                height={28}
              />
            </p> <p>
              <Image
                src={"/images/cart.png"}
                alt='cart-icon'
                width={38}
                height={30}
              />
            </p>

          </div>
        </div>


      </div>
    </div>
  )
}
