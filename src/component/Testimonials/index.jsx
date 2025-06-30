import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500000,
    pauseOnHover: true,
    arrows: false,
    fade: false,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="testimonial-star filled" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="testimonial-star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="testimonial-star empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="testimonial-slider-wrapper">
      <Slider {...settings} className="testimonial-carousel">
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div className="testimonial-card rounded-5 d-flex flex-column justify-content-between p-4">
              <div className="w-100">
                <div className="d-flex w-100 align-items-center">
                  <img src={slide.userPic} alt={slide.userName} className="testimonial-user-pic mb-3" />
                  <div className="w-100 ps-4">
                    <h5 className="testimonial-user-name mb-1">{slide.userName}</h5>
                    <div className="testimonial-user-designation mb-3">{slide.userDesignation}</div>
                  </div>
                </div>
                <p className="testimonial-description mb-4">{slide.description}</p>
              </div>
              <div className="testimonial-rating-box d-flex justify-content-between">
                <span className="testimonial-rating-value bg-primary text-white fw-bold px-3 py-1 rounded-pill">{slide.rating} / 5</span>
                <span className="testimonial-stars">{renderStars(slide.rating)}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials; 