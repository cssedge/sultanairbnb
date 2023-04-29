import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from "date-fns";
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

function Search({results}) {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests } = router.query;
    // console.log(router.query);
    
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");

    const range = `${formatedStartDate} - ${formatedEndDate}`;
    
    
    // console.log(results);
  return (
    <div className="searchPage">
        <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>

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

                
                <div className="">
                {results.map(({description, img, lat, location, long, price, star, title, total }) =>
                        <InfoCard key={lat}
                        description ={description}
                        img = {img}
                        lat = {lat}
                        location = {location}
                        long = {long}
                        price = {price}
                        star = {star}
                        title = {title}
                        total= {total}
                        />
                    )}
                </div>
            </section>

            <section className="hidden md:inline-flex xl:min-w[600px]">
                <Map searchjson={results? results : []} />
            </section>

            
        </main>

        <Footer />
    </div>
  )
}

export default Search


// Run getServerSideProps function
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
    const results = await searchResults.json() || [];

    // Pass data to the page via props
    return { 
        props: {
            results
        }
    }
}
