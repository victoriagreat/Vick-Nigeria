import React from 'react'
import {Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/ui/CommonSection'
import {Link} from 'react-router-dom'
import '../styles/contact.css'

    const socialLinks = [
        {
            url: 'https://www.facebook.com/profile.php?id=100081156494575',
            icon: 'ri-facebook-circle-fill'
        },

        {
            url: 'https://twitter.com/victoriaekene76',
            icon: 'ri-twitter-line'
        },

        {
            url: 'https://www.linkedin.com/in/victoria-ekene-ozoanidiobi-72ba33245/',
            icon: 'ri-linkedin-line'
        },

        {
            url: '#',
            icon: 'ri-instagram-line'
        }
    ]

const Contact = () => {
  return <Helmet title='Contact'>
    <CommonSection title='Contact'/>
    <section>
        <Container>
            <Row>
                <Col lg='7' md='7'>
                    <h6 className="fw-bold mb-4">Get In Touch</h6>

                    <Form>
                        <FormGroup className='contact__form'>
                            <Input placeholder='Your Name' type='text'/>
                        </FormGroup>

                        <FormGroup className='contact__form'>
                            <Input placeholder='Email' type='email'/>
                        </FormGroup>

                        <FormGroup className='contact__form'>
                            <textarea rows="5" placeholder='Message' className='textarea'></textarea>
                        </FormGroup>

                        <button className='contact__btn' type='submit'>Send Message</button>
                    </Form>
                </Col>

                <Col lg='5' md='5'>
                    <div className="contact__info">
                        <h6 className="fw-bold">Contact Information</h6>
                        <p className="section__description mb-0">5 Assembly Road, Satellite Town, Lagos.</p>
                        <div className='d-flex align-items-center gap-2'>
                            <h6 className='fs-6 mb-0'>Phone:</h6>
                            <p className="section__description mb-0">+2349063722517</p>
                        </div>

                        <div className='d-flex align-items-center gap-2'>
                            <h6 className='mb-0 fs-6'>Email:</h6>
                            <p className="section__description mb-0">victoriagreat820@gmail.com</p>
                        </div>

                        <h6 className="fw-bold mt-4">Follow Us</h6>

                        <div className='d-flex align-items-center gap-4 mt-3'>
                            {
                                socialLinks.map((item, index) =>(
                                    <Link to={item.url} key={index} className='social__link-icon'><i class={item.icon}></i></Link>
                                ))
                            }


                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  </Helmet>
}

export default Contact
