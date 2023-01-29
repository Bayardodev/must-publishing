import React, { Component } from "react";

// import Navbar from "@components/Navbar";
// import Sidebar from "@components/Sidebar";
// import Slider from "../Components/Slider";
// import Services from "@components/Services";
// import Calculation from "@components/Calculation";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Calculation from "../components/Calculation";


export default class Layouts extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <Slider></Slider>
          <Services />
          <Sidebar />
          <Calculation />
          <Footer></Footer>
        </div>
      </>
    );
  }
}
