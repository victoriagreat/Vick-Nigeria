import React from 'react'
import carData from '../assets/data/carData'
import {Container, Row, Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'



const CarDetails = () => {
   const { slug } = useParams()

  const singleCarItem = carData.find((item) => item.carName === slug)


  return ( 
    <Helmet title={singleCarItem.carName}>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={singleCarItem.imgUrl} alt="" className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default CarDetails
