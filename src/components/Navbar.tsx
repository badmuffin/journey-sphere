import logo from "../assets/icons/jsLogo.svg";
import person from "../assets/icons/person.svg";
import search from "../assets/icons/search.svg";

const Navbar = () => {
  const navlinks = [
    { title: "HOME", path: "/" },
    { title: "ABOUT US", path: "/" },
    { title: "TICKET", path: "/" },
    { title: "GALLERY", path: "/" },
    { title: "CONTACT US", path: "/" },
  ];

  return (
    <nav className="z-20 text-white min-h-10 max-w-full sticky top-0 py-6 flex justify-around items-center">
      <div className="flex gap-2 hover:cursor-pointer">
        <img src={logo} />
        <span className=" text-base font-sans tracking-tight justify-center items-center">
          JOURNEY SPHERE
        </span>
      </div>
      <div className="flex justify-center text-base gap-6">
        {navlinks.map((data, idx) => (
          <li
            key={idx}
            className="flex p-1 hover:cursor-pointer hover:text-[#FFC110] duration-200"
          >
            {data.title}
          </li>
        ))}
      </div>

      <div className="flex gap-4 justify-center items-center ">
        <img src={search} className="hover:cursor-pointer" />
        <img src={person} className="hover:cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
