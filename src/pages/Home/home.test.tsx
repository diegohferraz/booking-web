import React from 'react'
import {
  render,
  fireEvent,
  waitFor,
  getByRole,
  screen
} from '@testing-library/react'
import Home from '.'
import BookingContext from '@/context/BookingContext'
import { toast } from 'react-toastify'

vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn()
  }
}))

const mockContextValues = {
  bookings: [],
  setBookings: vi.fn()
}
const mockUseModal = vi.fn(() => ({
  isShowing: false,
  toggle: vi.fn()
}))

describe('HOME PAGE', () => {
  it('should render stays list', () => {
    render(<Home />)

    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('should modal toggles correctly on handleBookStay', () => {
    const { getByText } = render(
      <BookingContext.Provider value={mockContextValues}>
        <Home />
      </BookingContext.Provider>
    )

    const firstBtn = screen.getAllByText(
      'Book this offer'
    )[0] as HTMLButtonElement
    fireEvent.click(firstBtn)

    expect(getByText('Book a stay')).toBeInTheDocument()
  })

  it.skip('should booking functionality works correctly', async () => {
    const { getByText, getByLabelText } = render(
      <BookingContext.Provider value={mockContextValues}>
        <Home />
      </BookingContext.Provider>
    )

    const firstBtn = screen.getAllByText('Book this offer')[0]
    fireEvent.click(firstBtn)

    // const dateIpt = screen.getAllByRole('calendar')

    // fireEvent.click(screen.getByRole('button'))

    // fireEvent.change(getByLabelText('Start Date'), {
    //   target: { value: '2024-05-07' }
    // })
    // fireEvent.change(getByLabelText('End Date'), {
    //   target: { value: '2024-05-09' }
    // })
    // fireEvent.click(getByText('Confirm booking'))

    // await waitFor(() => {
    //   expect(mockContextValues.setBookings).toHaveBeenCalled()
    //   expect(toast.success).toHaveBeenCalledWith('Successfully booked!')
    // })
  })
})
