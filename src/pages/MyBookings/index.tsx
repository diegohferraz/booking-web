import { useContext, useState } from 'react'

import BookingContext from '@/context/BookingContext'
import useModal from '@/hooks/useModal'

import BookingsList from '@/components/BookingsList'
import Modal from '@/components/Modal'
import DatePicker from '@/components/DatePicker'
import { addDays, isBefore } from 'date-fns'
import { toast } from 'react-toastify'

const MyBookings = () => {
  const { bookings, setBookings } = useContext(BookingContext)
  const { isShowing: isShowingCancel, toggle: toggleCancel } = useModal()
  const { isShowing: isShowingEdit, toggle: toggleEdit } = useModal()

  const [bookingToEdit, setBookingToEdit] = useState<number | null>(null)
  const [dateFrom, setDateFrom] = useState<Date>(new Date())
  const [dateTo, setDateTo] = useState<Date>(new Date())

  const handleCancelBookingConfirmation = (bookingId: number) => {
    setBookingToEdit(bookingId)
    toggleCancel()
  }

  const handleEditBooking = (bookingId: number) => {
    const bookingData = bookings.find(
      (booking) => booking.bookingId === bookingId
    )

    if (!bookingData) {
      toast.error('Error finding your booking')
      return
    }

    setBookingToEdit(bookingId)
    setDateFrom(bookingData.dateFrom)
    setDateTo(bookingData.dateTo)
    toggleEdit()
  }

  const handleCancelBooking = () => {
    setBookings(
      bookings.filter((booking) => booking.bookingId !== bookingToEdit)
    )
    toast.success('Successfully deleted your booking!')
    toggleCancel()
  }

  const handleConfirmEditBooking = () => {
    if (!bookingToEdit) return

    setBookings(
      bookings.map((booking) => {
        if (booking.bookingId === bookingToEdit) {
          return {
            ...booking,
            dateFrom: dateFrom,
            dateTo: dateTo
          }
        } else {
          return booking
        }
      })
    )

    setBookingToEdit(null)
    toggleEdit()

    toast.success('Successfully update your booking!')
  }

  return (
    <main className="mx-auto w-full max-w-7xl grow p-6">
      <h2 className="mb-8 text-5xl font-medium text-secondary max-sm:text-4xl">
        Here are your next bookings
      </h2>
      <BookingsList
        bookings={bookings}
        onCancelBooking={handleCancelBookingConfirmation}
        onEditBooking={handleEditBooking}
      />

      <Modal
        isShowing={isShowingCancel}
        onHide={toggleCancel}
        title="Cancel a stay"
      >
        <p>Are you sure you want to cancel this booking?</p>
        <button
          onClick={handleCancelBooking}
          className="mt-3 w-full rounded bg-red-600 p-2 font-semibold text-white"
        >
          Yes
        </button>
        <button
          onClick={toggleCancel}
          className="mt-3 w-full rounded bg-primary p-2 font-semibold text-white"
        >
          No
        </button>
      </Modal>

      <Modal
        isShowing={isShowingEdit}
        onHide={toggleEdit}
        title="Change booking date"
      >
        <p>Choose a new date to your booking?</p>
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
          onClick={handleConfirmEditBooking}
          disabled={isBefore(dateTo, dateFrom)}
          className="mt-3 w-full rounded bg-primary p-2 font-semibold text-white disabled:bg-neutral-500"
        >
          Update booking
        </button>
      </Modal>
    </main>
  )
}
export default MyBookings
