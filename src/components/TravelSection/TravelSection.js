import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { Card, } from 'react-bootstrap';
import { MyContext } from '../../App';
import './TravelSection.css'
const TravelSection = ({ data }) => {
  const { image ,placeName} = data;
  const [background, setBackground] = useContext(MyContext);
 
  const backgroundImageStyle = {
    margin: '5px',
    borderRadius: '14px'
  }

  const handlePlace = () => {
    setBackground(data)
  }
  return (
    <Grid item xs={12} md={4}>
      <Card className="hover_effect" onClick={handlePlace} style={backgroundImageStyle} >
        <Card.Img className="img-fluid" variant="top" src={image} />
        <h5 style={{ color: 'white'}}>{ placeName}</h5>
      </Card>

    </Grid>
   
  );
};

export default TravelSection;