import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Services from "../Components/Services";
import Sidebar from "../Components/Sidebar";
import Calculation from "../Components/Calculation";

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
        </div>
      </>
    );
  }
}
