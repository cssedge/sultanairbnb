import Image from 'next/image'
import { useState } from 'react';
import {FaAlignJustify, FaGlobeAmericas, FaSearch, FaUserCircle} from 'react-icons/fa'; 

import 'react-date-range/dist/styles.css'; // main calendar style file
import 'react-date-range/dist/theme/default.css'; // calendar theme css file

import { DateRangePicker } from 'react-date-range';



function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endtDate, setEndDate] = useState(new Date());


    const selectionRange = {
        startDate: startDate,
        endDate: endtDate,
        key: 'selection',
      };

      const handleSelect =  (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
      }
    
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image src="/logo.svg" height={40} width={128} /> 
            {/* <img src="/logo.svg" alt="" /> */}
        </div>

        {/* middle */}
        <div className="headerSearch md:border-2 rounded-full flex items-center px-2 py-1 md:shadow-sm">
            
            <input
            value={searchInput}
            onChange={(e)=> setSearchInput(e.target.value)} 
            type="text" placeholder="Start your search" className="bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"  /> 


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

        {searchInput && (
            <div>
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#fd5b61']}
                    onChange={handleSelect}
                />
            </div>
        )}
        

    </header>
  )
}

export default Header