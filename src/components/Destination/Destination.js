import React from 'react'
import Header from '../Header/Header'
import HotelInfo from '../Hotelinfo/HotelInfo';
import { hotelsInfo } from '../../fakeData';
import { Grid } from '@material-ui/core';
const Destination = () => {  
  
  return (
    <div style={{backgroundColor: 'black',color: 'white',minHeight: '100vh', width: '100vw'}}>
      <Header/>
      <hr/>
      <Grid container item xs={12} justify={"space-between"}>
        <Grid item xs={12} md={7}>
          {hotelsInfo.map(hotel => <HotelInfo key={hotel.id} hotel={hotel} />)}
        </Grid>
        <Grid item xs={12} md={5}>
          <h1>Map</h1>
          <h3>In progress</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default Destination;