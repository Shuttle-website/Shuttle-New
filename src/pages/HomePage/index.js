import React, { useEffect } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../../components';
import Carousel from '../../components/Carousel';
import NewProducts from "../../components/NewArrivals/index"

const HomePage = () => {
  useEffect(() => {
    document.title = 'Shuttle | Home';
  }, []);

  return (
    <main>
      <Carousel />
      {/* <Hero /> */}
      <FeaturedProducts />

      <FeaturedProducts />

      {/* <NewProducts /> */}
      {/* <FeaturedProducts /> */}
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
