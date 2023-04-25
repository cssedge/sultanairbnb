import Image from 'next/image'
import {FaAlignJustify, FaGlobeAmericas, FaSearch, FaUserCircle} from 'react-icons/fa'; 


function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image src="/logo.svg" height={40} width={128} /> 
            {/* <img src="/logo.svg" alt="" /> */}
        </div>

        {/* middle */}
        <div className="headerSearch md:border-2 rounded-full flex items-center px-2 py-1 md:shadow-sm">
            <input type="text" placeholder="Start your search" className="bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"  /> 
            <span className="bg-red-400 rounded-full hidden md:inline-flex cursor-pointer">
                <FaSearch className="h-8 w-8  text-white text-sm py-2" />
            </span>
        </div>


        {/* right */}
        <div className="headerRight flex space-x-4 items-center justify-end text-gray-500">
            <p className="hidden md:inline-flex cursor-pointer font-semibold">Become a host</p>
            <FaGlobeAmericas />
            <div className="flex items-center space-x-2 border-2 rounded-full p-2">
                <FaAlignJustify />
                <FaUserCircle /> 
            </div>
        </div>

    </header>
  )
}

export default Header