const StaysItem = () => (
  <li>
    <a href="/" className="group">
      <div className="mb-3 h-72 w-full overflow-hidden rounded">
        <img
          className="size-full object-cover transition-transform group-hover:scale-110"
          src="/stays/derick-mckinney-veyLBev-c4c-unsplash.jpg"
        />
      </div>
      <div>
        <h3 className="font-semibold">Cabin on the woods</h3>
        <p className="text-sm opacity-85">Itaim bibi, São Paulo</p>
        <p className="text-sm opacity-85">
          <b>R$ 200,00</b> per night
        </p>
      </div>
    </a>
  </li>
)

export default StaysItem
