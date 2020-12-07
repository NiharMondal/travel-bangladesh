import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FormGroup} from '@material-ui/core';
import { MyContext } from '../../App';
import "./Booking.css"
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';


const Booking = () => {
  const [background] = useContext(MyContext)
  const history = useHistory()
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)

  const formControler = (event) => {
    event.preventDefault()
    history.push("/destination")
  }
 
  return (
    <div
      style={
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)), url(${background.image})`,
          height: "100vh", backgroundSize: "cover",
          padding: "0 30px",
          backgroundPosition: 'center',
          color: 'white'
        }
      }>
      <Header />
      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col xs={12} sm={12} md={6} style={{marginTop:'50px'}}>
            <h1>{background.placeName}</h1>
            <p>{background.description}</p>
          </Col>
          <Col sm={12} md={6}>
            <form className="booking-form" style={
              {
                padding: "7% 9% 7% 7%", margin: "auto",
                marginTop: "50px", width: "440px"
              }
            }
              onSubmit={formControler}>

              <FormGroup className="form-group" >

                <label htmlFor="origin">
                  Origin
                </label>
                <input id="origin" type="text" required />

                <label htmlFor="origin">
                  Destination
                </label>
                <input id="origin" type="text" required />

                <div className="datepicker-section" style={{ display: "flex" }}>
                  <div style={{ marginRight: "5px" }}>
                    <p>From</p>
                    <DatePicker  selected={from}
                      className="date-picker"
                      onChange={date => setFrom(date)}
                      required
                      placeholderText="Peek a date" />
                  </div>
                  <div>
                    <p>To</p>
                    <DatePicker selected={to}
                      className="date-picker"
                      onChange={date => setTo(date)}
                      required
                      placeholderText="Peek a date" />
                  </div>
                </div>
                <input type="submit" value="Start Booking" />

              </FormGroup>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;