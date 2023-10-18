import Footer from "./components/Footer/Footer";
import Navigationbar from "./components/Navbar/Navbar";

import AboutUs from "./container/AboutUs/AboutUs";
import Dynamics from "./container/Dynamics/Dynamics";
import Banner from "./container/Banner/Banner";
import PreRegister from "./container/PreRegister/PreRegister";


function App() {
  return (
    <div className="bg-[#192229]">
      <Navigationbar />
      <Banner />
      <AboutUs />
      <Dynamics />
      <PreRegister />
      <Footer />
    </div>
  );
}

export default App;
