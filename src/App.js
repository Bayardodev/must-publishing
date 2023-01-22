import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Services from "./Components/Services/Services";
import Sidebar from "./Components/Sidebar/Sidebar";
import Calculation from "./Components/Calculation/Calculation";

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Slider></Slider>
        <div className="row">
          <div className="col-sm-8">
            <Services />
          </div>
          <div className="col-sm-4">
            <Sidebar />
          </div>
        </div>
        <div>
          <Calculation />
        </div>
      </div>
    </>
  );
}

export default App;
