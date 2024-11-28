import Bottombar from "../components/Bottombar";
import footerBg from "../assets/otherImg/footer-bg.png";

const Footer = () => {
  return (
    <footer className="relative h-full w-full">
      <img src={footerBg} className=" w-full" />
      <div className="absolute w-full bottom-8 lg:bottom-14 z-10 ">
        <Bottombar />
      </div>
      <div className=" absolute h-full w-full top-0 bg-gradient-to-b from-black via-[#00000071] to-[#00000048]"></div>
    </footer>
  );
};

export default Footer;