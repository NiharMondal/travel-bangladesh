import React from 'react';
import notFoundImg from './not-found.png'
const NotFound = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width:'100vw'
  }
  return (
    <div style={divStyle}>
      <div>
        <img src={ notFoundImg} alt="" />
      </div>
    </div>
  );
};

export default NotFound;