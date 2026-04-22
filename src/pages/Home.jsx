import React from 'react';
import HeroSection from '../components/sections/Hero/HeroSection';
import NewReleasesSection from '../components/sections/NewReleases/NewReleasesSection';
import CuratedEditorial from '../components/sections/CuratedEditorial/CuratedEditorial';
const Home = () => {
  return (
    <>
      <HeroSection />
      <NewReleasesSection />
      <CuratedEditorial />
    </>
  );
};

export default Home;