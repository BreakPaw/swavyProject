import React from 'react';
import HomeArticle from './HomeArticle';
import PopularReviews from './PopularReviews';

const CuratedEditorial = () => {
  return (
    <section className="px-8 py-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
      <HomeArticle />
      <PopularReviews />
    </section>
  );
};

export default CuratedEditorial;