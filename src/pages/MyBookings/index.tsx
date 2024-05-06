import BookingsList from '@/components/BookingsList'

const MyBookings = () => (
  <main className="mx-auto w-full max-w-7xl grow p-6">
    <h2 className="mb-8 text-5xl font-medium text-secondary max-sm:text-4xl">
      Here are your next bookings
    </h2>
    <BookingsList />
  </main>
)

export default MyBookings
