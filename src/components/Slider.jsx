import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderText from '../components/SliderText';
class Slider extends React.Component {
  render() {
    return (
      <div>
        <Carousel className="carouselback" controls={false} interval={null}>
          <Carousel.Item>
            <SliderText />
          </Carousel.Item>
          <Carousel.Item>
            <SliderText />
          </Carousel.Item>
          <Carousel.Item>
            <SliderText />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
export default Slider;
