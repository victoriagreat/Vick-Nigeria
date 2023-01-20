import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css'
import sped from '../../assets/all-images/speed.jpg'

const AboutSection = ({aboutClass}) => {
  return <section className='about__section' style={aboutClass==='aboutPage' 
         ? {marginTop: '0px'} 
         : {marginTop: '50px'}
    }
    >
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="about__section-content">
                    <h4 className="section__subtitle">About Us</h4>
                    <h2 className="section__title">Welcome to car rent service</h2>
                    <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Voluptas provident voluptatum atque cumque maxime magni? Mollitia, ipsam.
                      Deleniti reprehenderit pariatur doloribus, non minus eum itaque doloremque illum
                       explicabo cupiditate beatae, 
                    corporis, similique numquam minima! Iure quis nisi in sapiente at.
                    </p>

                    <div className="about__section-item d-flex align-items-center">

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-line"></i> lorem ipsum dolor sit amet
                        </p>

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-line"></i> lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <div className="about__section-item d-flex align-items-center">

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-line"></i> lorem ipsum dolor sit amet
                        </p>

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-line"></i> lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="about__img">
                    <img src={sped} alt="" className='w-100' />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AboutSection
