import { FiEdit, FiTrash } from 'react-icons/fi'

type BookingListItemProps = {
  name: string
  address: string
  image: string
}

const BookingsListItem = ({ name, address, image }: BookingListItemProps) => (
  <li className="mb-2 flex overflow-hidden rounded-lg bg-white shadow-sm">
    <div className="size-44">
      <img className="size-full object-cover" src={`/stays/${image}`} />
    </div>
    <div className="flex grow flex-col gap-2 p-4">
      <h2 className="text-2xl text-secondary">{name}</h2>
      <p>{address}</p>
      <p>from 01/01/2024 to 10/01/2024</p>
    </div>
    <div className="flex items-end gap-3 p-4">
      <button className="flex items-center gap-3 rounded border border-orange-600 p-4 text-orange-600 transition-colors hover:bg-orange-500 hover:text-white">
        <FiEdit />
        Edit dates
      </button>
      <button className="flex items-center gap-3 rounded border border-red-600 p-4 text-red-600 transition-colors hover:bg-red-500 hover:text-white">
        <FiTrash />
        Cancel Booking
      </button>
    </div>
  </li>
)

export default BookingsListItem
