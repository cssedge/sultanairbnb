
import Image from 'next/image';

function SmallCard({img, location, distance}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 duration-150 ease-out cursor-pointer">
        <div className="imgWrap relative h-16 w-16">
            <Image src={img} 
            fill 
            className="rounded-lg"
            alt={location}
            sizes='100'
            /> 
        </div>
        
        <div className="cardDesc">
            <h2 className='font-semibold'>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div>

       
    </div>
  )
}

export default SmallCard