import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ProductSlider.css';
import angleRight from '../../assets/angle-right.svg';

const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-warning" />);
    }

    return stars;
  };

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="product-card d-flex flex-column align-items-center justify-content-between">
            <div className="w-100">
              <div className="product-image ratio ratio-1x1 rounded-circle mb-3">
                <img className='rounded-circle' src={product.image} alt={product.title} />
              </div>
              <h3 className="product-title text-center mb-0">{product.title}</h3>
            </div>
            <div className="product-content">
              <p className="product-description">{product.description}</p>
              <div className="product-rating">
                {renderStars(product.rating)}
                <span className="rating-count">({product.reviewCount})</span>
              </div>
              <div className="product-price">
                <span className="price">${product.price}</span>
                {product.oldPrice && (
                  <span className="old-price">${product.oldPrice}</span>
                )}
              </div>
              <Link to={product.link} className="btn btn-primary rounded-pill py-1 px-3 view-more banner-btn-arrow">
                View More
                <img 
                  src={angleRight} 
                  alt="Right Arrow" 
                  className="arrow-img ms-2"
                />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider; 