import Navbar from "../components/Navbar";
import hero1 from "../assets/mainImg/indonesia.png";
import hero2 from "../assets/mainImg/arizona.png";
import hero3 from "../assets/mainImg/egypt.png";
import hero4 from "../assets/mainImg/africa.png";
import hero5 from "../assets/mainImg/brazil.png";
import hero6 from "../assets/mainImg/kashmir.png";

const Hero = () => {
  const imageData = [
    {
      index: 1,
      image: hero1,
      name: "Indonesia",
      title:
        "Explore Indonesia, a stunning archipelago of 17,000+ islands where natural beauty and cultural diversity blend seamlessly. From lush jungles to serene beaches, it's a destination of unforgettable adventures and tranquility.",
    },
    {
      index: 2,
      image: hero2,
      name: "Arizona",
      title:
        "a natural wonder carved by the Colorado River, offering breathtaking views and unforgettable hikes. Explore its vast landscapes, perfect for adventure and nature lovers alike.",
    },
    {
      index: 3,
      image: hero3,
      name: "Egypt",
      title:
        "Explore the timeless wonders of Egypt, home to the iconic pyramids, ancient temples, and the majestic Nile River. Immerse yourself in the rich history and vibrant culture of this land of pharaohs and legends.",
    },
    {
      index: 4,
      image: hero4,
      name: "Africa",
      title:
        "Discover South Africa's breathtaking landscapes and vibrant culture, from Table Mountain to the wildlife of Kruger National Park. An unforgettable adventure awaits every traveler!",
    },
    {
      index: 5,
      image: hero5,
      name: "Brazil",
      title:
        "Discover the vibrant energy of Brazil, where lush rainforests, stunning beaches, and iconic landmarks like Christ the Redeemer await. Experience a thrilling blend of culture, nature, and adventure!",
    },
    {
      index: 6,
      image: hero6,
      name: "Kashmir",
      title:
        'Experience the breathtaking beauty of Kashmir, often called "Paradise on Earth." With its stunning landscapes, lush valleys, and serene lakes, Kashmir offers a perfect blend of natural wonder and rich culture.',
    },
  ];

  return (
    <section className="relative w-full h-screen text-white">
      <Navbar />
      {/* background */}
      <div>
        <img
          src={hero1}
          className="absolute top-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-screen bg-[#0000008b]"></div>
      </div>
      <div className="flex h-screen justify-center items-center px-10">
        {/* left content */}
        <div className="w-[50%] flex flex-col gap-4 z-10">
          <h1 className="text-[5rem] font-bold tracking-wider">INDONESIA</h1>
          <p className="tracking-wider w-[600px]">
            Explore Indonesia, a stunning archipelago of 17,000+ islands where
            natural beauty and cultural diversity blend seamlessly. From lush
            jungles to serene beaches, it's a destination of unforgettable
            adventures and tranquility.
          </p>
          <button className=" px-10 py-2 w-[200px] text-white border-2 rounded-2xl border-white bg-[#ffffff47]">
            Explore
          </button>
        </div>
        {/* carousel */}
        <div className="w-[50%] z-10">
          {imageData.map((data) => (
            <div className="min-w-[14rem] h-[20rem]">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
