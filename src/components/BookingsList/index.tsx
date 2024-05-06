import staysData from '../../mock/properties.json'
import BookingsListItem from './BookingListItem'

const BookingsList = () => (
  <ul>
    {staysData.map((stay) => (
      <BookingsListItem
        key={stay.id}
        name={stay.name}
        address={stay.address}
        image={stay.image}
      />
    ))}
  </ul>
)

export default BookingsList
