import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../component/Banner';
import BannerSlider from '../component/BannerSlider';
import Title from '../component/Title';
import HorizontalContentImages from '../component/HorizontalContentImages';
import SectionTitle from '../component/SectionTitle';
import ServiceContent from '../component/ServiceContent'
import coffeeHouse from '../assets/coffe_house.jpg';
import qualityKava from '../assets/quality_kava.jpg';
import qualityKava02 from '../assets/quality_kava_2.jpg';

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
                buttonText="Read More"
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
      <section className='section-spacing bg-dark'>
        <Container>
          <HorizontalContentImages
            subtitle="ABOUT US"
            title="We Invite You to Visit Our Coffee House"
            description="Step into our cozy coffee house and experience the perfect blend of rich aromas, warm ambiance, and handcrafted beverages. Whether you're here to catch up with friends, get some work done, or simply relax, we have the perfect cup waiting for you."
            buttonText="Read More"
            buttonLink="/menu"
            imageSrc={coffeeHouse}
            imageAlt="About Us"
            reverse={false}
          />
          <HorizontalContentImages
            subtitle="COFFEE MENU"
            title="Quality Kava Beans"
            description="Our kava beans are carefully sourced and expertly prepared to deliver a smooth, calming experience in every cup. Grown in the finest regions and selected for their purity and potency, they bring you the true essence of traditional relaxation."
            buttonText="Read More"
            buttonLink="/menu"
            imageSrc={qualityKava}
            imageAlt="Coffee Menu"
            reverse={true}
          />
          <HorizontalContentImages
            subtitle="OUR TEAM"
            title="Use the Tips & Recipes of Our Barista"
            description="Discover expert tips and signature recipes straight from our barista to elevate your coffee-making skills at home. From brewing techniques to creative drink ideas, we’ll help you craft café-quality coffee every time."
            buttonText="Read More"
            buttonLink="/menu"
            imageSrc={qualityKava02}
            imageAlt="Our Team"
            reverse={false}
          />
          <HorizontalContentImages
            subtitle="Fast Food"
            title="Unraveling Fast Food Delights"
            description="Take a flavorful journey through the world of fast food—where bold tastes, quick bites, and culinary creativity come together. Explore the classics you love and the twists you didn’t expect."
            buttonText="Read More"
            buttonLink="/menu"
            imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3"
            imageAlt="Fast Food"
            reverse={true}
          />
        </Container>
      </section>
      <section className='section-spacing bg-dark'>
        <Container>
          <Row>
            <div className='col-md-6 mx-auto'>
                <SectionTitle
                  subtitle="FEATURES"
                  title="Why people choose us?"
                  description="People choose us for fresh ingredients, flavorful dishes, and a warm, welcoming atmosphere that feels just like home."
                />
            </div>
          </Row>
          <Row>
            <ServiceContent 
              // imageSrc={coffeeHouse}
              imageAlt="About Us"
              title="We Invite You to Visit Our Coffee House"
              description="Step into our cozy coffee house and experience the perfect blend of rich aromas, warm ambiance, and handcrafted beverages. Whether you're here to catch up with friends, get some work done, or simply relax, we have the perfect cup waiting for you."
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;