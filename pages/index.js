import Head from 'next/head'
import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'



function Home({ explore, anywhere }) {
  return (
    <div>
      {console.log(anywhere)}
      <Head>
        <title> Sultan Airbnb </title>

      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <HomeBanner />
      {/* main */}
      <main className='max-w-7xl mx-auto px-8'>
        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API end points */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {explore?.map((item) => (
              <SmallCard key={item.name} img={item.img} location={item.location} distance={item.distance} />
            ))}
          </ul>
        </section>

        <section className='pt-6 mb-6'>
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          
          <ul className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3"> 
          
              {anywhere?.map(({img, title}) => (
              <MediumCard key="title" img={img} title={title} />
            ))}
            
          </ul>
          
        </section>

        <LargeCard 
        img="/lgcard.webp"
        title="The Greatest Outdoors"
        description="Wishlists Curated by Sultan Airbnb."
        buttonText="Get Inspired" />
      </main>


      <Footer />
    </div>
  )
}


// Here for the Home page we will use static rendering (cause not changing a lot!) Incremental Static Regeneration (ISR)

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const explore = await exploreData.json()

  // LiveAnywhere EndPoint
  const LiveAnywhereData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  const anywhere = await LiveAnywhereData.json()

  return {
    props: {
      explore,
      anywhere, 
    },
    // revalidate: 10,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds

  }
} 


export default Home