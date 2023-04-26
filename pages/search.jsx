import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from "date-fns";

function Search() {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests } = router.query;
    console.log(router.query);
    
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");

    const range = `${formatedStartDate} - ${formatedEndDate}`;
    
    

  return (
    <div className="searchPage">
        <Header />

        <main className="flex">
            <section className="flex-grow pt-14 p-5 md:px-10">
                <p className="text-xs">
                    300+ Stays - {range} - for {noOfGuests} guests
                </p>
                <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in {location}
                </h1>
                <div className='filters hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p 
                    className="filterBtns"> Cancelation Policy </p>
                    <p 
                    className="filterBtns"> Type of Place </p>
                    <p 
                    className="filterBtns"> Price </p>
                    <p 
                    className="filterBtns"> Rooms and Beds </p>
                    <p 
                    className="filterBtns"> More Filters </p>
                </div>
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search