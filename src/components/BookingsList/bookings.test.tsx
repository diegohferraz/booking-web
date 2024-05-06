import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import BookingsList from './index'

import staysData from '../../mock/properties.json'
import BookingsListItem from './BookingListItem'

const mockBooking = {
  bookingId: 1,
  stayId: 1,
  dateFrom: new Date('2024-05-06'),
  dateTo: new Date('2024-05-07')
}

const mockBookingItem = {
  id: 1,
  name: 'Stay close to the beach',
  address: 'Street 21, Ubatuba',
  image: 'img.jpg',
  dateFrom: new Date('2023-12-25'),
  dateTo: new Date('2023-12-30')
}

describe('Booking List Component', () => {
  it('should renders empty message when no bookings are present', () => {
    render(
      <BookingsList
        bookings={[]}
        onCancelBooking={() => {}}
        onEditBooking={() => {}}
      />
    )
    expect(
      screen.getByText('You still have not booked any stay.')
    ).toBeInTheDocument()
  })

  it('should render a single booking information correctly', () => {
    const expectedStay = staysData.find(
      (stay) => stay.id === mockBooking.stayId
    )
    const bookings = [mockBooking]

    render(
      <BookingsList
        bookings={bookings}
        onCancelBooking={() => {}}
        onEditBooking={() => {}}
      />
    )

    expect(screen.getByText(expectedStay!.name)).toBeInTheDocument()
    expect(screen.getByText(expectedStay!.address)).toBeInTheDocument()
  })
})

describe('Booking List Item Component', () => {
  const onCancelBookingMock = vi.fn()
  const onEditBookingMock = vi.fn()

  it('should render booking information correctly', () => {
    render(
      <BookingsListItem
        {...mockBookingItem}
        onCancelBooking={() => {}}
        onEditBooking={() => {}}
      />
    )

    expect(screen.getByText(mockBookingItem.name)).toBeInTheDocument()
    expect(screen.getByText(mockBookingItem.address)).toBeInTheDocument()
  })

  it('should call onCancelBooking on button click', () => {
    render(
      <BookingsListItem
        {...mockBookingItem}
        onCancelBooking={onCancelBookingMock}
        onEditBooking={() => {}}
      />
    )

    const cancelButton = screen.getByText('Cancel Booking')
    fireEvent.click(cancelButton)

    expect(onCancelBookingMock).toHaveBeenCalledWith(mockBookingItem.id)
  })

  it('should call onEditBooking on button click', () => {
    render(
      <BookingsListItem
        {...mockBookingItem}
        onCancelBooking={() => {}}
        onEditBooking={onEditBookingMock}
      />
    )

    const editButton = screen.getByText('Edit dates')
    fireEvent.click(editButton)

    expect(onEditBookingMock).toHaveBeenCalledWith(mockBookingItem.id)
  })
})
