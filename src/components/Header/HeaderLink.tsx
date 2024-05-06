import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type HeaderLinkProps = {
  label: string
  to: string
}

const HeaderLink = ({ label, to }: HeaderLinkProps) => {
  const location = useLocation()

  return (
    <Link
      className={twMerge(
        "relative p-4 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-secondary after:transition-all after:content-[''] hover:text-secondary hover:after:w-full",
        location.pathname === to && 'text-secondary after:w-full'
      )}
      to={to}
    >
      {label}
    </Link>
  )
}

export default HeaderLink
