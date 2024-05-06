import { BrowserRouter } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import AppRoutes from './Routes'

import { BookingContextProvider } from '../context/BookingContext'

function App() {
  return (
    <BookingContextProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-slate-100 text-defaultText">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </BookingContextProvider>
  )
}

export default App
