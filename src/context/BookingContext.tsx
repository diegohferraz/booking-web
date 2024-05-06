import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'
import { Booking } from './types'

type BookingContextProviderProps = {
  children: ReactNode
}

type BookingContextProps = {
  bookings: Booking[]
  setBookings: Dispatch<SetStateAction<Booking[]>>
}

const BookingContext = createContext<BookingContextProps>({
  bookings: [],
  setBookings: () => {}
})

export const BookingContextProvider = ({
  children
}: BookingContextProviderProps) => {
  const [bookings, setBookings] = useState<Booking[]>([])

  return (
    <BookingContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingContext.Provider>
  )
}

export default BookingContext
