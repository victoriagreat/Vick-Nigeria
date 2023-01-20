import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'


const quickLinks = [
  {
    path:'/about',
    display: 'About'
    
  },

  {
    path:'/#',
    display: 'Privacy Policy'
    
  },

  {
    path:'/cars',
    display: 'Cars Listing'
    
  },

  {
    path:'/contact',
    display: 'Contact'
    
  },
]

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
        <div className="logo footer__logo">
              <h1><Link to='/home' className='d-flex align-items-center gap-3'>
              <i class="ri-car-line"></i>
              <span>Rent Car <br /> Service</span>
              </Link></h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestias
               at modi voluptate nemo possimus. Quos aliquid facere obcaecati doloribus,
               expedita consequatur eligendi explicabo quis corporis, natus, eveniet sit vel?
            </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item, index) =>(
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
              <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className='office__info'>5 Assembly Road, Satellite Town, Lagos.</p>
              <p className='office__info'>Phone: 09063722517</p>
              <p className='office__info'>Email: victoriagreat820@gmail.com</p>
              <p className='office__info'>Office Time: 8am - 5pm</p>
              </div>
        </Col>

        <Col lg='3' md='4' sm='12'>
          <div className="mb-4">
          <h5 className="footer__link-title">News Letter</h5>
          <p className="section__description">Subscribe to our newletter</p>
          <div className="newsletter">
            <input type="email" placeholder='Email' />
            <span><i class="ri-send-plane-line"></i></span>
          </div>
          </div>
        </Col>

        <Col lg='12'>
              <div className="footer__bottom">
                <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by Ozoanidiobi Victoria.
                 All rights reserved.
                </p>
              </div>
        </Col>

      </Row>
    </Container>
  </footer>
}

export default Footer
