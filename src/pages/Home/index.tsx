import { useContext, useState } from 'react'
import { addDays, areIntervalsOverlapping, isBefore } from 'date-fns'

import Modal from '@/components/Modal'
import Hero from '@/components/Hero'
import StaysList from '@/components/StaysList'
import DatePicker from '@/components/DatePicker'

import staysData from '@/mock/properties.json'

import useModal from '@/hooks/useModal'
import BookingContext from '@/context/BookingContext'
import { toast } from 'react-toastify'

const Home = () => {
  const { isShowing, toggle } = useModal()
  const { bookings, setBookings } = useContext(BookingContext)

  const [currentBookingStayId, setCurrentBookingStayId] = useState<
    number | null
  >(null)
  const [dateFrom, setDateFrom] = useState<Date>(new Date())
  const [dateTo, setDateTo] = useState<Date>(addDays(new Date(), 1))

  const handleBookStay = (stayId: number) => {
    setCurrentBookingStayId(stayId)
    toggle()
  }

  const handleConfirmBooking = () => {
    if (!currentBookingStayId) return

    const hasOverlap = bookings.some((booking) => {
      return areIntervalsOverlapping(
        { start: booking.dateFrom, end: booking.dateTo },
        { start: dateFrom, end: dateTo },
        { inclusive: true }
      )
    })

    if (hasOverlap) {
      toast.error('You already have an booking for this date.')
      return
    }

    setBookings([
      ...bookings,
      {
        bookingId: new Date().getTime(),
        stayId: currentBookingStayId,
        dateFrom: dateFrom,
        dateTo: dateTo
      }
    ])

    setCurrentBookingStayId(null)
    setDateFrom(new Date())
    setDateTo(addDays(new Date(), 1))
    toggle()

    toast.success('Successfully booked!')
  }

  return (
    <>
      <Hero />
      <main className="mx-auto w-full max-w-7xl grow p-6">
        <h2 className="mb-8 text-5xl font-medium text-secondary max-sm:text-4xl">
          Stays near you
        </h2>
        <StaysList stays={staysData} onBookStay={handleBookStay} />
      </main>

      <Modal isShowing={isShowing} onHide={toggle} title="Book a stay">
        <p>
          When do you want to stay at{' '}
          <b>
            {staysData.find((stay) => stay.id === currentBookingStayId)?.name}
          </b>{' '}
          ?
        </p>
        <div className="my-4 flex gap-4">
          <DatePicker date={dateFrom} onDateChange={setDateFrom} />
          <DatePicker
            date={dateTo}
            minDate={addDays(dateFrom, 1)}
            onDateChange={setDateTo}
          />
        </div>
        {isBefore(dateTo, dateFrom) && (
          <p className="text-sm text-red-600">
            End date should be after Start date
          </p>
        )}
        <button
          onClick={handleConfirmBooking}
          disabled={isBefore(dateTo, dateFrom)}
          className="mt-3 w-full rounded bg-primary p-2 font-semibold text-white disabled:bg-neutral-500"
        >
          Confirm booking
        </button>
      </Modal>
    </>
  )
}
export default Home
