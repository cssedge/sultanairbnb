import React from 'react'
import Image  from 'next/image';

function LargeCard({img, title, description, buttonText}) {
  return (
    <div className='cursor-pointer relative'>
        <div className="bannerWrap relative h-96  ">
            {/* <img src={img} alt={title} /> */}
            <Image src={img} fill
            style={{objectFit:"cover"}}
            className='rounded-2xl'
             />
        </div>

        <div className='absolute top-1/2 left-12'>
            <h3 className='text-3xl font-bold mb-3'> {title} </h3>
            <p> { description} </p>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:bg-red-400 hover:shadow-md active:scale-90 duration-100  '>{buttonText}</button>
        </div>
        

    </div>
  )
}

export default LargeCard