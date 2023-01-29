import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Services from "../Components/Services";
import Sidebar from "../Components/Sidebar";
import Calculation from "../Components/Calculation";
import Footer from "../Components/Footer";

export default class Layouts extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Navbar></Navbar>
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
