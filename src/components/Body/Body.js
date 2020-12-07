import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import TravelSection from '../TravelSection/TravelSection';
import locations from '../../fakeData/index'
const Body = () => {
  const [background] = useContext(MyContext)
  return (
    <div style={{ color: 'white',marginTop: '100px' }}>
      <Container>
        <Row>
          <Col sm={12} md={5}>
            <h1>{background.placeName}</h1>
            <p>{background.description?.slice(0,190) }.....</p>
            <Link to="/booking">
              <Button>Booking</Button>
            </Link>
          </Col>
          <Col style={{display: 'flex'}} sm={12} md={7} >
            {
              locations.map(data => 
                <TravelSection data={ data}/>
              )
            }
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;