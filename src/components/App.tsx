import Footer from './Footer'
import Header from './Header'
import StaysList from './StaysList'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-defaultText">
      <Header />

      <main className="mx-auto w-full max-w-7xl grow p-6">
        <h2 className="mb-8 text-5xl font-medium text-secondary max-sm:text-4xl">
          Stays near you
        </h2>
        <StaysList />
      </main>

      <Footer />
    </div>
  )
}

export default App
