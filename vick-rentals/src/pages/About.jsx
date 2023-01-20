import React from 'react'
import CommonSection from '../components/ui/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import AboutSection from '../components/ui/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeDriverSection from '../components/ui/BecomeDriverSection'
import slide1 from '../assets/all-images/slider-2.jpg'
import OurMembers from '../components/ui/OurMembers'
import '../styles/about.css'


export default function About() {
  return <Helmet title='About'>
    <CommonSection title='About Us'/>
    <AboutSection aboutClass = 'AboutPage'/>

    <section className='about__page-section'>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12'>
            <div className="about__page-img">
              <img src={slide1} alt="" className='w-100 rounded-3' />
            </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
            <div className="about__page-content">
              <h2 className="section__title">We are committed to provide safe ride solutions.</h2>

              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Repellendus optio reiciendis esse distinctio unde doloribus consectetur
                  suscipit quidem molestiae totam nisi perferendis,
                 itaque quis harum obcaecati laudantium voluptates tempore accusamus.
              </p>

              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Repellendus optio reiciendis esse distinctio unde doloribus consectetur
                  suscipit quidem molestiae totam nisi perferendis,
                 itaque quis harum obcaecati laudantium voluptates tempore accusamus.
              </p>

              <div className='d-flex align-items-center gap-3 mt-4'>
                <span fs-4><i class="ri-phone-line"></i></span>
              </div>

              <div>
                <h6 className="section__subtitle">Need any help?</h6>
                <h4>+2349063722517</h4>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <BecomeDriverSection/>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className="section__subtitle">Experts</h6>
            <h4 className="section__title">Our Members</h4>
          </Col>
          <OurMembers/>
        </Row>
      </Container>
    </section>
  </Helmet>
}
