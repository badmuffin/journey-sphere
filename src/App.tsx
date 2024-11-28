// import Navbar from "./components/Navbar";
import Offer from "./sections/Offer";
import Footer from "./sections/Footer";
import BookNow from "./sections/BookNow";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Gallery />
      <BookNow />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
