import React from 'react';
import ReviewCard from '../CuratedEditorial/ReviewCard';

const PopularReviews = () => {
  const reviews = [
    { id: 1, title: "Electric Dreams", artist: "Arcade Fire", rating: "8.4", snippet: '"A shimmering return to form that balances grand anthems with intimate moments..."' },
    { id: 2, title: "Silent Echo", artist: "The Quiet Ones", rating: "7.2", snippet: '"Technically proficient but occasionally lacks the emotional punch of their debut..."', isGray: true },
    { id: 3, title: "Hyper-Glow", artist: "Pixel Heart", rating: "9.1", snippet: '"The definitive pop album of the summer. Every track is a masterclass in production..."' },
    { id: 4, title: "Winter Cabin", artist: "Folk & Shore", rating: "6.8", snippet: '"Atmospheric but drifts too far into repetitive melodies toward the end..."', isGray: true },
  ];

  return (
    <div className="w-full
  lg:max-w-[350px]
  xl:max-w-[400px]">
      <h2 className="text-2xl font-[Liberation_Serif] text-gray-900 mb-6">Popular Reviews</h2>
      
      <div className="flex flex-col gap-6 mb-8">
        {reviews.map((review) => (
          <ReviewCard 
            key={review.id}
            title={review.title}
            artist={review.artist}
            rating={review.rating}
            snippet={review.snippet}
            isGray={review.isGray}
          />
        ))}
      </div>

      <button className="font-[Manrope] w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold tracking-widest uppercase py-3 md:py-4 rounded-md transition">
        View All Reviews
      </button>
    </div>
  );
};

export default PopularReviews;