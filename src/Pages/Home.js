import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import LatestPost from '../Components/Posts/LatestPost'
import Footer from '../Components/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <LatestPost/>
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
