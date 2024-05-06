import Hero from '../../components/Hero'
import StaysList from '../../components/StaysList'

import staysData from '../../mock/properties.json'

const Home = () => (
  <>
    <Hero />
    <main className="mx-auto w-full max-w-7xl grow p-6">
      <h2 className="mb-8 text-5xl font-medium text-secondary max-sm:text-4xl">
        Stays near you
      </h2>
      <StaysList stays={staysData} />
    </main>
  </>
)

export default Home
