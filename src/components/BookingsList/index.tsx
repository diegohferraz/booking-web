import { Booking } from '@/context/types'

import BookingsListItem from './BookingListItem'

import staysData from '../../mock/properties.json'

type BookingsListProps = {
  bookings: Booking[]
}

const BookingsList = ({ bookings }: BookingsListProps) => {
  const bookingWithStayData = bookings.map((booking) => {
    const stayData = staysData.find((stay) => stay.id === booking.stayId)

    return { ...booking, ...stayData }
  })

  if (bookingWithStayData.length === 0) {
    return <h1>You still have not booked any stay.</h1>
  }

  return (
    <ul>
      {bookingWithStayData.map((stay) => (
        <BookingsListItem
          key={stay!.id}
          name={stay.name!}
          address={stay.address!}
          image={stay.image!}
          dateFrom={stay.dateFrom}
          dateTo={stay.dateTo}
        />
      ))}
    </ul>
  )
}

export default BookingsList
