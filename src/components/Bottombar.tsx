import logo from "../assets/icons/logo.svg";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";

const Bottombar = () => {
  const navlinks = [
    { title: "HOME", path: "/" },
    { title: "ABOUT US", path: "/" },
    { title: "TICKET", path: "/" },
    { title: "GALLERY", path: "/" },
    { title: "CONTACT US", path: "/" },
  ];

  return (
    <nav className=" text-white w-full bg-transparent flex justify-around items-center">
      <div className="flex gap-2 hover:cursor-pointer">
        <img src={logo} />
        <span className="text-sm z-10 md:text-base font-sans tracking-tight justify-center items-center">
          JOURNEY SPHERE
        </span>
      </div>
      {/* <div className="md:flex justify-center text-sm lg:text-base gap-6 hidden md:visible">
        {navlinks.map((data, idx) => (
          <li
            key={idx}
            className="flex p-1 hover:cursor-pointer hover:text-[#FFC110] duration-200"
          >
            {data.title}
          </li>
        ))}
      </div> */}

      <div className="flex gap-2 md:gap-4 justify-center items-center">
        <img src={facebook} className="w-6 h-6" />
        <img src={instagram} className="w-6 h-6" />
        <img src={youtube} className="w-6 h-6" />
      </div>
    </nav>
  );
};

export default Bottombar;
