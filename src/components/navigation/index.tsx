import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Home`,
    href: `#home`, // ID of the Home section
  },
  {
    label: `Scholars`,
    href: `#scholars`, // ID of the Scholars section
  },
  {
    label: `FAQs`,
    href: `#faqs`, // ID of the FAQs section
  },
  {
    label: `Question`,
    href: `#question`, // ID of the Question section
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link) => (
        <a
          href={link.href}
          className={tw(`text-gray-500 block px-3 py-2 text-base font-medium 
          hover:text-white hover:bg-teal-500 rounded`)}
          key={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-20 w-20`)} src="muftiLogo.svg" alt="logo" width={48} height={48} />
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={tw(
                      `text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium hover:text-green-300`,
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              {/* <Button primary modifier="rounded-full px-6 py-2" onClick={() => window.location.href = '/contactus'}>Contact US</Button> */}
              <Button primary modifier="rounded-full px-6 py-2">Contact US</Button>

            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
