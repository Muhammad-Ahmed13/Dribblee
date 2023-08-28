import React from 'react';
import Popular from './Popular';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Explore from './Explore'
import Dropdown from './Dropdown';

const Index = () => {

  return (
  <>
  <Header/>
  <Explore/>
  <Dropdown/>
  <Popular/>
  <Footer/>
  </>
  )
}

export default Index