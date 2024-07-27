import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this import is in your main entry file

const MyCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-2xl md:py-1 px-2 py-2 md:h-[91vh] sm:h-[65vh] h-72"
          src="https://www.pathlight.org.sg/media/k2/galleries/205/IMG_8075.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='md:text-3xl text-xl font-semibold text-shadow text-stroke'>Annual Sports Day- Celebrating Excellence in Sports</h3>
          {/* <p className='md:text-2xl text-1xl'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-2xl md:py-1 px-2 py-2 md:h-[91vh] sm:h-[65vh] h-72"
          src="https://www.vvsw.edu.in/wp-content/uploads/2020/01/IMG-20200123-WA0049.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='md:text-3xl text-xl font-semibold text-shadow text-stroke'>Science Exhibition- Showcasing Student Innovations</h3>
          {/* <p className='md:text-2xl text-1xl'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-2xl md:py-1 px-2 py-2 md:h-[91vh] sm:h-[65vh] h-72"
          src="https://gisgondal.com/wp-content/uploads/2021/05/IMG_2144-scaled.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='md:text-3xl text-xl font-semibold text-shadow text-stroke'>Cultural Fest- Embracing Diversity and Creativity</h3>
          {/* <p className='md:text-2xl text-1xl'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
