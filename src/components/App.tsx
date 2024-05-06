import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

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
      <ToastContainer position="top-center" />
    </BookingContextProvider>
  )
}

export default App
