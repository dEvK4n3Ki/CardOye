import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

// import S from './CarouselImg/event.jpg';
// import S1 from './CarouselImg/1/1.jpg';
// import S2 from './CarouselImg/2/2.jpg';
// import S3 from './CarouselImg/3/3.jpg';
// import S4 from './CarouselImg/4/4.jpg';
// import S5 from './CarouselImg/5/5.jpg';

import S1 from './CarouselImg/img1.jpg';
import S2 from './CarouselImg/img2.jpg';
import S3 from './CarouselImg/img3.jpg';


import './Carousel.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <div style={{ backgroundColor: "#0a5767" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="cImage d-block w-100 h-50"
              src={S1}
              height={200}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage d-block w-100 h-50"
              src={S2}
              height={200}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage d-block w-100 h-50"
              src={S3}
              height={200}
              alt="Third slide"
            />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="cImage d-block w-100 h-50"
              width={200}
              src={S4}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage d-block w-100 h-50"
              width={200}
              src={S5}
              alt="Fifth slide"
            />
          </Carousel.Item> */}
        </Carousel>
      // </div>
    );
  }
}
