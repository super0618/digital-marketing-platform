import React, { Component } from 'react';
import Header from '../Components/Header';
import MainCrousel from '../Components/Carousel';

class Home extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='main-carousel'>
          <MainCrousel />
        </div>
      </div>
    )
  }
}

export default Home;