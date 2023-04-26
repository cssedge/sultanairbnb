import Image from "next/image"


function MediumCard({img, title}) {
  return (
    <li className="cursor-pointer hover:scale-105 duration-300 ease-out list-none">
        <div className="imgWrap relative h-80 w-80">
            <Image src={img}
             alt={title}
             sizes="100"
             fill style={{objectFit:"cover"}} 
             placeholder="blur"
             blurDataURL={"/logo.svg"}
             className="rounded-xl" />
        
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
        
    </li>
  )
}

export default MediumCard