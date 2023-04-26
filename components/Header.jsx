import Image from 'next/image'
import { useRouter } from 'next/router';

import { useState } from 'react';
import { FaAlignJustify, FaGlobeAmericas, FaSearch, FaUserCircle, FaUsers } from 'react-icons/fa';

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

import { DateRangePicker } from 'react-date-range';
import Link from 'next/link';




function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endtDate, setEndDate] = useState(new Date());
    const [noOfGuests, setnoOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endtDate,
        key: 'selection',
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetSearch = ()=> {
        setSearchInput('');
    }
    const fireSearch = () => {
        router.push("/search");
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Link href="/">
                    <Image priority={true} src="/logo.svg" height={40} width={128} alt='sultanAirbnb' />
                </Link>
            </div>


            <div className="headerSearch md:border-2 rounded-full flex items-center px-2 py-1 md:shadow-sm">

                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text" placeholder="Start your search" className="bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" />


                <span className="bg-red-400 rounded-full hidden md:inline-flex cursor-pointer">
                    <FaSearch className="h-8 w-8  text-white text-sm py-2" />
                </span>
            </div>



            <div className="headerRight flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer font-semibold">Become a host</p>
                <FaGlobeAmericas />
                <div className="flex items-center space-x-2 border-2 rounded-full p-2">
                    <FaAlignJustify />
                    <FaUserCircle />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 justify-center mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#fd5b61']}
                        onChange={handleSelect}
                    />
                    <div className="guests flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <FaUsers className="h-5"/>

                        <input type="number"
                         value={noOfGuests}
                         onChange={(e) => setnoOfGuests(e.target.value) }
                         min={1}
                        className="w-12 pl-2 text-lg outline-none text-red-400 font-semibold"
                        />
                        
                    </div>
                    <div className="calendarBtns flex font-semibold">
                        <button 
                        onClick={resetSearch}
                        className="flex-grow text-gray-500 hover:scale-90 duration-100"> 
                        Cancel
                        </button>
                        
                            <button
                            onClick={fireSearch} 
                            className="flex-grow text-red-400 hover:scale-90 duration-100"> 
                            Search
                            </button>
                        
                    </div>
                </div>
            )}


        </header>
    )
}

export default Header