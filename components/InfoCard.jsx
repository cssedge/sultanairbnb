import Image from 'next/image'
import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'

function InfoCard({description, img, lat, location, long, price, star, title, total }) {
  return (
    <div className="flex mb-6 py-7 px-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 first:border-t">
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image 
            className='rounded-2xl'
            src={img} fill  />
        </div>

        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between items-center">
              <p> {location} </p>
              <FaRegHeart />
          </div>
          <h4 className='text-xl'>{title}</h4>
          <div className="border-b w-10 pt-2"></div>
          <p className="pt-2 text-sm text-gray-500 flex-grow">
            {description}
          </p>

          <div className="flex justify-between items-end pt-5">
            <p className='flex items-center'>
              <FaStar className='text-red-400 mr-1' />
              {star}
            </p>

            <div>
              <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
              <p className='text-right font-extralight'>{total}</p>
            </div>
          </div>


        </div>
        

        
        
    </div>
  )
}

export default InfoCard