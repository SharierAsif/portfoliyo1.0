import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HeaderMenu from "./Components/HeaderMenu";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import SideBar from "./Components/SideBar";
import Skilles from "./Components/Skilles";
import { Testomonal } from "./Components/Testomonal";

function App() {
  return (
    <div className="m-auto font-sans bg-white relative dark:bg-gray-700 dark:text-blue-100">
      <HeaderMenu />
      <Home />
      <About />
      <Skilles />
      <Portfolio />
      <Testomonal/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
