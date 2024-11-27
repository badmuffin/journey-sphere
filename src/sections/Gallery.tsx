import gal1 from "../assets/otherImg/gal1.png";
import gal2 from "../assets/otherImg/gal2.png";
import gal3 from "../assets/otherImg/gal3.png";
import gal4 from "../assets/otherImg/gal4.png";

const Gallery = () => {
  return (
    <section className="w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl text-[#FFC110] font-bold">
          The Wonder of Nature
        </h1>
        <p className="text-sm">
          We seek to provide the authetic content for traveller around the world
        </p>
      </div>
      <div className="flex justify-center items-center mt-10 gap-10">
        <div className="hover:scale-110 duration-300">
          <img src={gal1} className="w-[280px] h-[380px]" />
        </div>
        <div className="hover:scale-110 duration-300">
          <img src={gal2} className="w-[280px] h-[380px] " />
        </div>
        <div className="hover:scale-110 duration-300">
          <img src={gal3} className="w-[280px] h-[380px] " />
        </div>
        <div className="hover:scale-110 duration-300">
          <img src={gal4} className="w-[280px] h-[380px] " />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
