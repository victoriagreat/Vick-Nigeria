import React from 'react'
import HeroSlider from '../components/ui/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../components/ui/FindCarForm'
import AboutSection from '../components/ui/AboutSection'
import carData from '../assets/data/carData'
import CarItem from '../components/ui/CarItem'
import BecomeDriverSection from '../components/ui/BecomeDriverSection'
import Testimonials from '../components/ui/Testimonials'


const Home = () => {
  return (
    <Helmet title='Home'>
      <section className="p-0 hero__slider-section">
        <HeroSlider/>

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg='4' md='4'>
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg='8' md='8' sm='12'>
                <FindCarForm/>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <AboutSection/>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">hot offers</h2>
            </Col>

            {carData.slice(0, 6).map(item  =>(
                <CarItem item={item} key={item.id} />
              ))}
          </Row>
        </Container>
      </section>

      <BecomeDriverSection/>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
                <h6 className="section__subtitle">Our Clients says</h6>
                <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonials/>

          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home
