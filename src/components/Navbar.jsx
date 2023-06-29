import { ReactComponent as Logo } from "../assets/icons/nike.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as Dark } from "../assets/icons/moon.svg";
import { ReactComponent as Light } from "../assets/icons/light.svg";
import { ReactComponent as Bag } from "../assets/icons/bag.svg";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  };

  const showMenu = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const showSearch = () => {
    if (isSearchOpen) {
      setIsSearchOpen(!isSearchOpen);
    } else {
      setIsSearchOpen(!isSearchOpen);
    }
  };

  useEffect(() => {
    const searchSection = document.querySelector(".search-section");
    if (isSearchOpen) {
      searchSection.classList.add("active");
    } else {
      searchSection.classList.remove("active");
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuIcon = document.querySelector(".menu-icon");
    if (isSidebarOpen) {
      menu.classList.add("active");
      menuIcon.classList.add("active");
    } else {
      menu.classList.remove("active");
      menuIcon.classList.remove("active");
    }
  }, [isSidebarOpen]);

  return (
    <>
      {isSidebarOpen && <Backdrop toggle={setIsSidebarOpen} />}
      {isSearchOpen && <Backdrop toggle={setIsSearchOpen} />}
      <nav className="h-16 flex justify-between items-center relative dark:text-white">
        <div className="lg:w-1/3 w-1/4">
          <Logo className="dark:fill-white" width={50} />
        </div>
        <div className="elements hidden md:block lg:w-1/3 w-2/4">
          <ul className="flex justify-between gap-8">
            <li className=" transition duration-200">Home</li>
            <li className="transition duration-200">Products</li>
            <li className="transition duration-200">About</li>
            <li className="transition duration-200">Support</li>
          </ul>
        </div>
        <div className="flex justify-end w-2/3 lg:w-1/3 md:w-1/4">
          <ul className="flex gap-8 lg:gap-6 md:gap-4">
            <li>
              <SearchIcon className="nav-icon" onClick={showSearch} />
            </li>
            <li onClick={changeMode}>
              {darkMode ? (
                <Light className="nav-icon" />
              ) : (
                <Dark className="nav-icon" />
              )}
            </li>
            <li>
              <Bag className="nav-icon" />
            </li>
            <li onClick={showMenu} className="">
              <div className="menu-icon">
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
              </div>
            </li>
          </ul>
        </div>
        <Search />
      </nav>
    </>
  );
};

export default Navbar;
