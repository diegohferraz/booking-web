import StaysItem from './StaysItem'

type StaysListProps = {
  stays: {
    id: number
    name: string
    address: string
    image: string
    price: number
  }[]
  onBookStay: (stayId: number) => void
}

const StaysList = ({ stays, onBookStay }: StaysListProps) => (
  <ul className="grid grid-cols-3 gap-x-6 gap-y-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
    {stays.map((stay) => (
      <StaysItem
        key={stay.id}
        name={stay.name}
        address={stay.address}
        image={stay.image}
        price={stay.price}
        onBookStay={() => onBookStay(stay.id)}
      />
    ))}
  </ul>
)

export default StaysList
