import { headerLogo } from "../assets/images";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const NavBar = ({ setIsHamburgerPressed, isHamburgerPressed }) => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container items-center max-lg:z-[-100]">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden items-center">
          {navLinks?.map((item, index) => (
            <li key={index}>
              <a
                href={item?.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item?.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            className="hover:cursor-pointer"
            onClick={() => {
              setIsHamburgerPressed(!isHamburgerPressed);
            }}
            src={isHamburgerPressed ? close : hamburger}
            alt="hamburger"
            width={isHamburgerPressed ? 35 : 25}
            height={isHamburgerPressed ? 35 : 25}
          />
        </div>
      </nav>{" "}
      {isHamburgerPressed && (
        <div className=" max-lg:block neo-brutalism-blue hidden transition-opacity duration-500 opacity-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 -z-10">
            {navLinks.map((link, index) => (
              <a
                onClick={() => {
                  setIsHamburgerPressed(false);
                }}
                href={link.href}
                className="text-white-400 hover:text-white block px-3 py-2 rounded-md text-base font-montserrat font-medium"
                key={index}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
