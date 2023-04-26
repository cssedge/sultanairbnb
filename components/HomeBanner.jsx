import Image from 'next/image'

function HomeBanner() {
  return (
    <div className="relative flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">

      <Image src="/hero.webp"
        as={"image"}
        alt="sultanAirbnb"
        fill
        sizes="100"
        priority={true}
        placeholder="blur"
        blurDataURL={"/logo.svg"}
        style={{ objectFit: "cover" }} />


      <div className="z-10 font-semibold flex flex-col">
        Not sure where to go? perfect. 

        <button className="text-purple-500 bg-white bg-opacity-70 hover:bg-opacity-100 active:scale-90 duration-150 rounded-full shadow-md p-2 m-2">
          Top destinations 
        </button>
      </div>
    </div>
  )
}

export default HomeBanner