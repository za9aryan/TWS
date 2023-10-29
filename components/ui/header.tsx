import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Icon from '@/public/images/tws-logo.jpg'
import Image from 'next/image'

const IconImg = <Image className="max-w-full mx-auto md:max-w-none h-auto rounded-full " src={Icon} width={65} height={65} alt="TWS - TestWare Solutions" />

export default function Header() {
  return (
    <header id="header" className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="#header" className="block" aria-label="Cruip">
              {IconImg}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://www.linkedin.com/company/testware-solutions/"
                  target="_blank"
                  className="font-medium text-primary-green hover:text-primary-whiteHover px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  linkedIn
                </Link>
              </li>
              <li>
                <a href="#contact" className="btn-sm text-white bg-primary-green hover:bg-primary-greenHover ml-3">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
