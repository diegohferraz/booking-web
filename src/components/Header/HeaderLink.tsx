type HeaderLinkProps = {
  label: string
  to: string
}

const HeaderLink = ({ label, to }: HeaderLinkProps) => (
  <a
    className="relative p-4 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-secondary after:transition-all after:content-['_'] hover:text-secondary hover:after:w-full"
    href={to}
  >
    {label}
  </a>
)

export default HeaderLink
