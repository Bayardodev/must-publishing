import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Services from './Components/Services';

function App() {
  return (
    <>
      <div className='main-container'>
        <Navbar></Navbar>
        <Slider></Slider>
        <Services></Services>
      </div>
    </>
  );
}

export default App;