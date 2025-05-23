import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../component/Banner';
import BannerSlider from '../component/BannerSlider';
import ProductSlider from '../component/ProductSlider';
import Title from '../component/Title';

const Home = () => {
  const sliderSlides = [
    {
      title: "Welcome to Our Restaurant",
      subtitle: "Experience the finest dining with our exquisite menu and warm atmosphere",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3",
      buttonText: "View Menu",
      buttonLink: "/menu"
    },
    {
      title: "Special Offers",
      subtitle: "Enjoy our seasonal menu with special discounts and promotions",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3",
      buttonText: "Learn More",
      buttonLink: "/offers"
    },
    {
      title: "Private Events",
      subtitle: "Host your special occasions in our elegant venue",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3",
      buttonText: "Book Now",
      buttonLink: "/events"
    }
  ];

  const products = [
    {
      title: "Beef Fried",
      description: "Handmade pasta with our secret sauce recipe.",
      image: "https://images.unsplash.com/photo-1669907366240-365f02ceaf44",
      rating: 4.5,
      reviewCount: 128,
      price: 24.99,
      oldPrice: 29.99,
      link: "/menu/pasta"
    },
    {
      title: "Hamburger",
      description: "Fresh Atlantic salmon with seasonal vegetables.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating: 4.8,
      reviewCount: 95,
      price: 32.99,
      link: "/menu/seafood"
    },
    {
      title: "Apple Pie",
      description: "Angus beef patty with special sauce.",
      image: "https://plus.unsplash.com/premium_photo-1694336203192-c9e7f2891b95",
      rating: 4.3,
      reviewCount: 156,
      price: 18.99,
      link: "/menu/burgers"
    },
    {
      title: "Buffalo Wings",
      description: "Rich chocolate cake with ganache.",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d",
      rating: 4.7,
      reviewCount: 82,
      price: 12.99,
      link: "/menu/desserts"
    },
    {
      title: "Macaroni and Cheese",
      description: "A creamy, comforting dish made from cooked.",
      image: "https://plus.unsplash.com/premium_photo-1661677825991-caa232fea9da",
      rating: 4.7,
      reviewCount: 82,
      price: 12.99,
      link: "/menu/desserts"
    },
    {
      title: "Beef",
      description: "Discover our menu and order delivery.",
      image: "https://images.unsplash.com/photo-1690983322025-aab4f95a0269",
      rating: 4.7,
      reviewCount: 82,
      price: 12.99,
      link: "/menu/desserts"
    },
    {
      title: "Salmon",
      description: "Get the freshest salmon and ocean trout.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      rating: 4.7,
      reviewCount: 82,
      price: 12.99,
      link: "/menu/desserts"
    }
  ];

  return (
    <>
      <Title title="Home" />
      <BannerSlider slides={sliderSlides} />
      <section className="section-spacing position-relative section-categories">
        <Container className='position-relative z-1'>
          <Row className="g-4">
            <div className="col-md-5">
              <Banner
                title="Reservations"
                subtitle="Book your table online and enjoy a memorable dining experience"
                image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3"
                variant="secondary"
                buttonText="Book Now"
                buttonLink="/reservation"
                height="medium"
                className="h-100"
              />
            </div>
            <div className="col-md-7">
              <Banner
                title="Special Events"
                subtitle="Host your special occasions in our elegant venue"
                image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3"
                variant="secondary"
                buttonText="Learn More"
                buttonLink="/events"
                height="medium"
                className="h-100"
              />
            </div>
            <div className="col-md-7">
              <Banner
                title="Our Menu"
                subtitle="Discover our carefully crafted dishes made with the finest ingredients"
                image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3"
                variant="secondary"
                buttonText="View Menu"
                buttonLink="/menu"
                height="medium"
                className="h-100"
              />
            </div>
            <div className="col-md-5">
              <Banner
                title="Catering"
                subtitle="Let us cater your next event with our premium catering services"
                image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3"
                variant="dark"
                buttonText="Learn More"
                buttonLink="/catering"
                height="medium"
                className="h-100"
              />
            </div>
          </Row>
        </Container>
      </section>
      <section className="bg-primary section-spacing section-product position-relative">
        <Container fluid className='position-relative z-1'>
          <Row>
            <Col md={12}>
              <h2 className="section-title text-center text-white mb-4">Featured Dishes</h2>
              <ProductSlider products={products} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;