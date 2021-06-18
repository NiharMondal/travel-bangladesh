import React from 'react'
import Header from '../Header/Header'
import HotelInfo from '../Hotelinfo/HotelInfo';
import { hotelsInfo } from '../../fakeData';
import { Grid } from '@material-ui/core';
import Map from './Map';
const Destination = () => {  
  
  return (
    <div style={{backgroundColor: 'black',color: 'white',minHeight: '100vh', width: '100vw'}}>
      <Header/>
      <hr/>
      <Grid container justify={"space-between"} style={{padding:'10px'}}>
        <Grid item xs={12} md={7}>
          {hotelsInfo.map(hotel => <HotelInfo key={hotel.id} hotel={hotel} />)}
        </Grid>
        <Grid item xs={12} md={5}>
          <Map/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Destination;