import { FiInstagram, FiFacebook, FiGithub } from 'react-icons/fi'

const Footer = () => (
  <footer className="border-t bg-white ">
    <div className="mx-auto flex w-full max-w-7xl justify-between border-t bg-white p-4">
      <p>© 2024 Diego Ferraz</p>
      <div className="flex gap-4">
        <a
          className="group"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram className="size-6 transition-colors group-hover:text-primary" />
        </a>
        <a
          className="group"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FiFacebook className="size-6 transition-colors group-hover:text-primary" />
        </a>
        <a
          className="group"
          href="https://github.com/diegohferraz"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="size-6 transition-colors group-hover:text-secondary" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
