import React from 'react';
import StarHalfSharpIcon from '@material-ui/icons/StarHalfSharp';

const HotelInfo = ({ hotel }) => {

  const { title, star, reviewed, bedroom, bed, bath, img, guest, price } = hotel;
  return (
    <div style={{ display: 'flex', padding: '10px', alignItems: 'center' }}>
      <div>
        <img style={{ width: '250px' }} src={img} alt="" />
      </div>
      <div style={{ marginLeft: '10px' }}>
        <h4 style={{ margin: '0px' }}>{title}</h4>
        <div >
          <span style={{ marginRight: '5px' }}>
            {guest} guests
          </span>

          <span style={{ marginRight: '5px' }}>
            {bedroom} bedrooms
          </span>
          <span style={{ marginRight: '5px' }}>
            {bed} beds
          </span>
          <span>
            {bath} baths
          </span>
        </div>
        <p style={{ margin: '0px', padding: '0px' }}>Wifi air conditioning kitchen</p>
        <p >Cancellation flexibility available</p>
        <div className="hotel-review" style={{
          display: "flex", alignItems: "center"
        }}>
          <StarHalfSharpIcon style={{color: 'orange'}}></StarHalfSharpIcon>
          <span>
            {star} ({reviewed})
          </span>
          <span>
            ${price}/
           <span className="custom-color">
              Night
            </span>
          </span>
          <span className="custom-color">
            167 total
           </span>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;