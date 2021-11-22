import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';

export default function slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://cdn.britannica.com/92/216092-050-4B31C2B7/custom-library.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Best bookshop in the multiverse!</h3>
          <p>If it was ever written, we sell it!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://cdn.britannica.com/92/216092-050-4B31C2B7/custom-library.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Best bookshop in the multiverse!</h3>
          <p>If it was ever written, we sell it!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://cdn.britannica.com/92/216092-050-4B31C2B7/custom-library.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Best bookshop in the multiverse!</h3>
          <p>If it was ever written, we sell it!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
