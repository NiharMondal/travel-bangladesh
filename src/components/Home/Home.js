import React from 'react';
import Body from '../Body/Body';
import Header from '../Header/Header';

const Home = () => {

  const appStyle = {
    height: '100vh',
    width: '100vw',
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://i.ibb.co/6Rx1PCZ/Sajek.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgrounRepeat: 'no-repeat'

  }
  

  return (
    <div style={appStyle}>
      <Header />
      <Body/>
     
    </div>
  );
};

export default Home;