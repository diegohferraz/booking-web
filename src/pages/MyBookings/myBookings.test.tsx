import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import MyBookings from '.'
import BookingContext from '@/context/BookingContext'
import { toast } from 'react-toastify'

vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn()
  }
}))

const mockContextValues = {
  bookings: [
    {
      bookingId: 1,
      dateFrom: new Date('2024-05-07'),
      dateTo: new Date('2024-05-10')
    }
  ],
  setBookings: vi.fn()
}

describe('My bookings', () => {
  it('should render MyBookings component', () => {
    render(
      <BookingContext.Provider value={mockContextValues}>
        <MyBookings />
      </BookingContext.Provider>
    )
  })

  it('should modal toggle correctly', () => {
    const { getByText } = render(
      <BookingContext.Provider value={mockContextValues}>
        <MyBookings />
      </BookingContext.Provider>
    )

    fireEvent.click(getByText('Cancel Booking'))
    expect(
      getByText('Are you sure you want to cancel this booking?')
    ).toBeInTheDocument()

    // fireEvent.click(getByText('Change booking date'))
    // expect(getByText('Choose a new date to your booking?')).toBeInTheDocument()
  })

  it('should cancellation functionality works correctly', async () => {
    const { getByText } = render(
      <BookingContext.Provider value={mockContextValues}>
        <MyBookings />
      </BookingContext.Provider>
    )

    fireEvent.click(getByText('Cancel Booking'))
    fireEvent.click(getByText('Yes'))

    await waitFor(() => {
      expect(mockContextValues.setBookings).toHaveBeenCalled()
      expect(toast.success).toHaveBeenCalledWith(
        'Successfully deleted your booking!'
      )
    })
  })

  it('should edit functionality works correctly', async () => {
    const { getByText } = render(
      <BookingContext.Provider value={mockContextValues}>
        <MyBookings />
      </BookingContext.Provider>
    )

    fireEvent.click(getByText('Edit dates'))
    fireEvent.click(getByText('Update booking'))

    await waitFor(() => {
      expect(mockContextValues.setBookings).toHaveBeenCalled()
      expect(toast.success).toHaveBeenCalledWith(
        'Successfully update your booking!'
      )
    })
  })
})
