import logo from "../assets/icons/logo.svg";
import person from "../assets/icons/person.svg";
import search from "../assets/icons/search.svg";
import burger from "../assets/icons/burger.svg";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { data, Country } from "../utils/mockData";

const Navbar = () => {
  const navlinks = [
    { title: "HOME", path: "/" },
    { title: "ABOUT US", path: "/about" },
    { title: "TICKET", path: "/ticket" },
    { title: "GALLERY", path: "/gallery" },
    { title: "CONTACT US", path: "/contact" },
  ];

  const [inputVal, setInputVal] = useState<string>("");
  const [filterDatas, setFilterDatas] = useState<Country[]>([]);
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);

  useEffect(() => {
    if (inputVal) {
      setFilterDatas(
        data
          .filter((dt) =>
            dt.name.toLowerCase().includes(inputVal.toLowerCase())
          )
          .slice(0, 6)
      );
    } else {
      data.slice(0, 6);
    }
  }, [inputVal, data]);

  return (
    <nav className="z-20 text-white min-h-10 bg-[#000000ec] max-w-full sticky top-0  px-6 py-4 flex flex-row justify-between md:justify-around items-center">
      <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
        <img src={logo} />
        <span className="text-sm md:text-base font-sans tracking-tight ">
          JOURNEY SPHERE
        </span>
      </div>
      <div className="md:flex justify-center text-base gap-6 hidden md:visible">
        {navlinks.map((data, idx) => (
          <NavLink
            to={data.path}
            key={idx}
            className={({ isActive }) =>
              `${
                isActive ? "text-[#FFC110]" : " "
              } flex p-1 hover:cursor-pointer hover:text-[#FFC110] duration-200`
            }
          >
            {data.title}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-4 justify-center items-center">
        {/* Search Icon */}
        <div className="relative">
          <img
            src={search}
            className="hover:cursor-pointer"
            onClick={() => setDropDownVisible(!dropDownVisible)}
          />
          {dropDownVisible && (
            <div className="absolute top-10 right-0 w-[300px] bg-white text-black p-4 rounded-xl shadow-lg z-50">
              <input
                type="text"
                placeholder="Search here..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none"
              />
              <div className="mt-2 flex flex-col gap-1">
                {filterDatas.map((country) => (
                  <p
                    key={country.id}
                    className="p-2 hover:bg-gray-200 rounded-md cursor-pointer"
                  >
                    {country.name}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <img src={person} className="hover:cursor-pointer" />
        <img src={burger} className="visible md:hidden hover:cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
