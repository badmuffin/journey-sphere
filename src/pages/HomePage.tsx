import BookNow from "../sections/BookNow";
import Gallery from "../sections/Gallery";
import Hero from "../sections/Hero";
import Offer from "../sections/Offer";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <Gallery />
      <BookNow />
      <Offer />
    </section>
  );
};

export default HomePage;
