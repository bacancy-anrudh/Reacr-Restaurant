import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import './BannerSlider.css';
import angleRight from '../../assets/angle-right.svg';

const BannerSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
  };

  return (
    <div className="banner-slider-wrapper">
      <Slider {...settings} className="banner-carousel">
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div 
              className="banner-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="banner-slide-overlay" />
              <Container className='h-100 d-flex align-items-center'>
                <div className="banner-slide-content">
                  {slide.title && (
                    <h2 className="banner-slide-title">{slide.title}</h2>
                  )}
                  {slide.subtitle && (
                    <p className="banner-slide-subtitle">{slide.subtitle}</p>
                  )}
                  {slide.buttonText && (
                    <a 
                      href={slide.buttonLink} 
                      className="rounded-pill px-3 px-lg-4 banner-btn-arrow btn btn-primary"
                    >
                      <span>{slide.buttonText}</span>
                      <img 
                        src={angleRight} 
                        alt="Right Arrow" 
                        className="arrow-img ms-2"
                      />
                    </a>
                  )}
                </div>
              </Container>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider; 