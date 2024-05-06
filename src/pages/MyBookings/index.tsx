import { useContext } from 'react'
import BookingsList from '@/components/BookingsList'
import BookingContext from '@/context/BookingContext'

const MyBookings = () => {
  const { bookings } = useContext(BookingContext)

  return (
    <main className="mx-auto w-full max-w-7xl grow p-6">
      <h2 className="mb-8 text-5xl font-medium text-secondary max-sm:text-4xl">
        Here are your next bookings
      </h2>
      <BookingsList bookings={bookings} />
    </main>
  )
}
export default MyBookings
