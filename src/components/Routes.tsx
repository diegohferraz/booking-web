import { Routes, Route } from 'react-router-dom'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import MyBookings from 'pages/MyBookings'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
