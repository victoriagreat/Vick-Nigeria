import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/ui/CommonSection'
import CarItem from '../components/ui/CarItem'
import carData from '../assets/data/carData'

export default function CarListing() {
  return <Helmet title='Cars'>
            <CommonSection  title='Car Listing'/>

            <section>
              <Container>
                <Row>
                  <Col lg='12'>
                    <div className='d-flex align-items-center-gap-3 mb-5'>
                      <span className='d-flex align-items-center gap-2'><i class="ri-sort-asc"></i>Sort by</span>
                      <select name="" id="">
                        <option>Select</option>
                        <option value="low">Low to high</option>
                        <option value="high">High to low</option>
                      </select>
                    </div>
                  </Col>

                  {
                    carData.map(item=> <CarItem item={item} key= {item.id} />)
                  }
                </Row>
              </Container>
            </section>
         </Helmet>
}
