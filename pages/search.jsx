import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Search() {
  return (
    <div className="searchPage">
        <Header />

        <main className="flex">
            <section className="flex-grow pt-14 p-5 md:px-10">
                <p className="text-xs">
                    300+ Stays for 5 guests
                </p>
                <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in Mars
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