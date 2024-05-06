type StaysItemProps = {
  name: string
  address: string
  image: string
  price: number
}
const StaysItem = ({ name, address, image, price }: StaysItemProps) => (
  <li>
    <a href="/" className="group">
      <div className="mb-3 h-72 w-full overflow-hidden rounded">
        <img
          className="size-full object-cover transition-transform group-hover:scale-110"
          src={`/stays/${image}`}
        />
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm opacity-85">{address}</p>
        <p className="text-sm opacity-85">
          <b>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'usd'
            }).format(price)}
          </b>{' '}
          per night
        </p>
        <button className="mt-3 w-full rounded bg-primary p-2 font-semibold text-white">
          Book this offer
        </button>
      </div>
    </a>
  </li>
)

export default StaysItem
