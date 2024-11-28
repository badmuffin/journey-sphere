// import Navbar from "./components/Navbar";
import Offer from "./sections/Offer";
import Footer from "./sections/Footer";
import BookNow from "./sections/BookNow";
import Gallery from "./sections/Gallery";
// import HeroNew from "./sections/HeroNew";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      {/* <HeroNew /> */}
      <Gallery />
      <BookNow />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
