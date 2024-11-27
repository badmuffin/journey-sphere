import img1 from "../assets/otherImg/img1.png";
import img2 from "../assets/otherImg/img2.png";
import img3 from "../assets/otherImg/img3.png";

// import treeBg from "../assets/otherImg/treeBg.png";

const BookNow = () => {
  return (
    <section className="relative w-full h-screen flex justify-between items-center px-10 bg-[url('assets/otherImg/treeBg.png')] bg-cover text-white">
      {/* gradients for the background */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black via-[#0000008d] to-[#00000017]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-[#000000c7] to-[#00000017]"></div>

      <div className="z-10 px-10 w-[600px] flex flex-col gap-10 justify-center items-left">
        <h1 className="text-6xl text-[#F4BE23] font-bold">
          Here's Makes a vacation perfect for you!
        </h1>
        <p className="text-base tracking-wider">
          Whether you're planning a family vacation with your pet, a relaxing
          weekend escape, or an adventurous trip, vacation rentals offer the
          perfect fit for any travel style. From cozy mountain cabins to scenic
          lakeside lodges, you'll find the ideal spot to create unforgettable
          memories.
        </p>
        <button className=" px-10 py-2 w-[200px] text-white border-2 rounded-2xl border-white bg-[#ffffff47]">
          Book Now
        </button>
      </div>
      <div className="z-10 w-[600px] flex flex-wrap flex-row-reverse justify-center items-center">
        <img src={img1} className="hover:scale-105 duration-300" />
        <img src={img2} className="hover:scale-105 duration-300" />
        <img src={img3} className="hover:scale-105 duration-300" />
      </div>
    </section>
  );
};

export default BookNow;
