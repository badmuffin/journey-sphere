import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
