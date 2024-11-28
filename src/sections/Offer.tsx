import destination from "../assets/icons/destination.svg";
import itenaries from "../assets/icons/itenaries.svg";
import travel from "../assets/icons/travel.svg";


const Offer = () => {
  
  const offer = [
    {
      img: destination,
      heading: "Destination Inspiration",
      sub: "Discover unique spots, from famous landmarks to hidden gems.",
    },
    {
      img: itenaries,
      heading: "Custom Itineraries",
      sub: "Discover unique spots, from famous landmarks to hidden gems.",
    },
    {
      img: travel,
      heading: "Stress-Free Travel",
      sub: "Expert tips and resources for smooth, hassle-free journey",
    },
  ];

  return (
    <section className=" py-10 bg-black text-white">
      <div>
        <div className=" text-center">
          <h1 className="text-4xl font-bold text-[#FFC110]">WHAT WE OFFER</h1>
          <h2 className="text-lg">
            Tailored travel experiences for every explorer.
          </h2>
        </div>

        <div className="my-20 flex justify-center items-center">
          {offer.map((data, idx) => (
            <div
              key={idx}
              className="w-[240px] flex flex-col items-center text-center"
            >
              <img src={data.img} className="w-20 animate-bounce" />
              <p className="font-bold text-xl pt-8">{data.heading}</p>
              <p className="text-sm tracking-wide">{data.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;