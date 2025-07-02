import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Banner from '../component/Banner';
import BannerSlider from '../component/BannerSlider';
import Title from '../component/Title';
import HorizontalContentImages from '../component/HorizontalContentImages';
import SectionTitle from '../component/SectionTitle';
import ServiceContent from '../component/ServiceContent'
import coffeeHouse from '../assets/coffe_house.jpg';
import qualityKava from '../assets/quality_kava.jpg';
import qualityKava02 from '../assets/quality_kava_2.jpg';
import Testimonials from '../component/Testimonials';
import ProductCard from '../component/ProductCard';
import Footer from '../component/Footer';

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
      buttonText: "Read More",
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
      <section className="section-spacing bg-gradient-darkLight position-relative section-categories">
        <Container className='position-relative z-1'>
          <Row className="gx-3 gx-md-4 gy-4">
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
                buttonText="Read More"
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
                buttonText="Read More"
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
            description="Discover expert tips and signature recipes straight from our barista to elevate your coffee-making skills at home. From brewing techniques to creative drink ideas, we'll help you craft café-quality coffee every time."
            buttonText="Read More"
            buttonLink="/menu"
            imageSrc={qualityKava02}
            imageAlt="Our Team"
            reverse={false}
          />
          <HorizontalContentImages
            subtitle="Fast Food"
            title="Unraveling Fast Food Delights"
            description="Take a flavorful journey through the world of fast food—where bold tastes, quick bites, and culinary creativity come together. Explore the classics you love and the twists you didn't expect."
            buttonText="Read More"
            buttonLink="/menu"
            imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3"
            imageAlt="Fast Food"
            reverse={true}
          />
        </Container>
      </section>

      <section className='section-spacing bg-gradient-darkLight'>
        <Container>
          <Row>
            <div className='col-md-6 mx-auto text-white text-center'>
                <SectionTitle
                  subtitle="FEATURES"
                  title="Why people choose us?"
                  description="People choose us for fresh ingredients, flavorful dishes, and a warm, welcoming atmosphere that feels just like home."
                />
            </div>
          </Row>
          <Row className='gy-4'>
            <div className='col-lg-4'>
              <ServiceContent
                title="Menu For Every Taste"
                description="Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem."
              />
            </div>
            <div className='col-lg-4'>
              <ServiceContent
                title="Always Qulity Beans"
                description="Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem."
              />
            </div>
            <div className='col-lg-4'>
              <ServiceContent
                title="Experienced Barista"
                description="Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem."
              />
            </div>
          </Row>
        </Container>
      </section>

      <section className='section-spacing bg-dark position-relative section-categories'>
        <Container className='position-relative z-1'>
          <Row>
            <div className='col-md-8 mx-auto text-white text-center'>
              <SectionTitle
                subtitle="Testimonials"
                title="What Our Customers Say"
                description="Hear from our happy guests about their experiences at our restaurant."
              />
            </div>
          </Row>
          <Row>
            <div className='col-xl-11 mx-auto'>
              <Testimonials
                slides={[
                  {
                    userPic: 'https://randomuser.me/api/portraits/men/32.jpg',
                    userName: 'John Doe',
                    userDesignation: 'Food Blogger',
                    description: 'Absolutely loved the ambiance and the food! The staff was friendly and the coffee was the best I have ever had.',
                    rating: 4.5
                  },
                  {
                    userPic: 'https://randomuser.me/api/portraits/women/44.jpg',
                    userName: 'Jane Smith',
                    userDesignation: 'Chef',
                    description: 'A wonderful place for family dinners. The desserts are to die for and the service is top-notch.',
                    rating: 5
                  },
                  {
                    userPic: 'https://randomuser.me/api/portraits/men/65.jpg',
                    userName: 'Michael Lee',
                    userDesignation: 'Coffee Enthusiast',
                    description: 'The kava beans here are of the highest quality. I always leave with a smile on my face.',
                    rating: 4
                  }
                ]}
              />
            </div>
          </Row>
        </Container>
      </section>
      
      <section className='section-spacing bg-gradient-darkLight position-relative section-categories'>
        <Container className='position-relative z-1'>
          <Row>
            <div className='col-md-8 mx-auto text-white text-center'>
              <SectionTitle
                subtitle="Recent Launch Items"
                title="Explore Our Foods"
                description="Hear from our happy guests about their experiences at our restaurant."
              />
            </div>
          </Row>
          <Row className='gy-4'>
            <div className="col-xl-4">
              <ProductCard
                image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3"
                title="Raspberry French Toast"
                details="Time: 10 - 15 Minutes | Serves: 1"
                price="12.50"
                oldPrice="13.20"
                buttonText="Order Now"
                onButtonClick={() => { /* handle order */ }}
              />
            </div>
            <div className="col-xl-4">
              <ProductCard
                image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3"
                title="Raspberry French Toast"
                details="Time: 10 - 15 Minutes | Serves: 1"
                price="12.50"
                oldPrice="13.20"
                buttonText="Order Now"
                onButtonClick={() => { /* handle order */ }}
              />
            </div>
            <div className="col-xl-4">
              <ProductCard
                image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3"
                title="Raspberry French Toast"
                details="Time: 10 - 15 Minutes | Serves: 1"
                price="12.50"
                oldPrice="13.20"
                buttonText="Order Now"
                onButtonClick={() => { /* handle order */ }}
              />
            </div>
          </Row>
        </Container>
      </section>
      <section className='section-spacing bg-dark'>
        <Container className='position-relative z-1'>
          <Row>
            <div className='col-md-8 mx-auto text-white text-center'>
              <SectionTitle
                subtitle="NewsLetter"
                title="Subscribe Our Newsletter"
                description="Hear from our happy guests about their experiences at our restaurant."
              />

              <Form className="d-flex gap-0">
                <Form.Control type="email" placeholder="Type here..." className="rounded-start-2 rounded-end-0" />
                <Button type="submit" className="btn btn-primary rounded-start-0 px-4">Subscribe</Button>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;