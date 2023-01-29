import React, { Component } from "react";
import "./slider.css";
export default class Slider extends Component {
  render() {
    return (
      <>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" style={{background:"#FF5733"}}>
        <div className="carousel-item active">
          <img src="/static/images/slide1.jpg" className="d-block" alt="Slider 1"/>
        </div>
        <div className="carousel-item">
        <img src="/static/images/slide1.jpg" className="d-block" alt="Slider 1"/>
        </div>
        <div className="carousel-item">
        <img src="/static/images/slide1.jpg" className="d-block" alt="Slider 1"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Өмнөх</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Дараах</span>
      </button>
    </div>
      </>
    );
  }
}
