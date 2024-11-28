import Navbar from "../components/Navbar";
import hero1 from "../assets/mainImg/indonesia.png";
import hero2 from "../assets/mainImg/arizona.png";
import hero3 from "../assets/mainImg/egypt.png";
import hero4 from "../assets/mainImg/africa.png";
import hero5 from "../assets/mainImg/brazil.png";
import hero6 from "../assets/mainImg/kashmir.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  const sliderRef = useRef<Slider | null>(null);
  const [currIndex, setCurrIndex] = useState(0);

  const handlePrevClick = () => {
    // console.log("Prev button");
    sliderRef.current?.slickPrev();
    setCurrIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length
    );
  };
  const handleNextClick = () => {
    // console.log("Next Button");
    sliderRef.current?.slickNext();
    setCurrIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const bgIndex = (currIndex - 1 + imageData.length) % imageData.length;

  return (
    <section className="relative w-full h-screen text-white">
      <Navbar />
      {/* background */}
      <div>
        <img
          src={imageData[bgIndex].image}
          className="absolute top-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-screen bg-[#0000008b]"></div>
      </div>
      <div className="flex h-screen justify-center items-center px-10">
        {/* left content */}
        <div className="w-[50%] flex flex-col gap-4 z-10">
          <h1 className="text-[5rem] font-bold tracking-wider">
            {imageData[bgIndex].name}
          </h1>
          <p className="tracking-wider w-[600px]">
            {imageData[bgIndex].title}
          </p>
          <button className=" px-10 py-2 w-[200px] text-white border-2 rounded-2xl border-white bg-[#ffffff47]">
            Explore
          </button>
        </div>
        {/* carousel */}
        <div className="w-[50%] z-10 flex justify-center gap-10 ">
          <Slider ref={sliderRef} {...settings} className="w-full">
            {imageData.map((data, idx) => (
              <div key={idx} className="min-w-[7rem] h-[18rem] px-2">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex gap-4 absolute bottom-10 left-[54%]">
        <button
          onClick={handlePrevClick}
          className="p-3 bg-[#000000aa] rounded-full text-white"
        >
          prev
        </button>
        <button
          onClick={handleNextClick}
          className="p-3 bg-[#000000aa] rounded-full text-white"
        >
          next
        </button>
      </div>
    </section>
  );
};

export default Hero;
