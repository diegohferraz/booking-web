import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FiX, FiMenu } from 'react-icons/fi'

import HeaderLink from './HeaderLink'

import userImg from '../../assets/eu.jpg'

const LINKS = [
  { label: 'Stays', to: '/' },
  { label: 'My Bookings', to: '/' }
]

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <header className="sticky top-0 flex justify-between border-b bg-white p-3 align-middle shadow-sm">
      <div className="grow">
        <a href="/">
          <img alt="Hostifully" src="/logo.svg" className="w-[134px]" />
        </a>
      </div>
      <nav className="flex items-center align-middle max-md:hidden">
        <ul className="mr-20 flex gap-2">
          {LINKS.map((linkItem) => (
            <li key={linkItem.label}>
              <HeaderLink label={linkItem.label} to={linkItem.to} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3 max-md:hidden">
        <p>Hi, Diego</p>
        <div className="size-7 overflow-hidden rounded-full">
          <img src={userImg} />
        </div>
      </div>

      <button
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        className="p-1 md:hidden"
      >
        {isMenuOpened ? (
          <FiX className="size-6" />
        ) : (
          <FiMenu className="size-6" />
        )}
      </button>
      <div
        className={twMerge(
          'absolute left-0 top-full w-full overflow-hidden bg-white p-6 transition-all ',
          isMenuOpened ? 'h-auto' : 'h-0 py-0'
        )}
      >
        <nav className="flex items-center align-middle md:hidden">
          <ul className="mr-20 flex flex-col gap-5">
            {LINKS.map((linkItem) => (
              <li key={linkItem.label}>
                <HeaderLink label={linkItem.label} to={linkItem.to} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
