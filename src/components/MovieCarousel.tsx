import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(5);
      }
    };
    
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const next = () => {
    if (currentIndex + itemsToShow < movies.length) {
      setCurrentIndex(currentIndex + itemsToShow);
    }
  };

  const prev = () => {
    if (currentIndex - itemsToShow >= 0) {
      setCurrentIndex(currentIndex - itemsToShow);
    }
  };

  const currentMovies = movies.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="relative w-full flex items-center">
      <button
        onClick={prev}
        className="absolute left-0 z-10 p-2 bg-gray-700 text-white rounded-full"
        disabled={currentIndex === 0}
      >
        <SlArrowLeft/>
      </button>
      
      <div className="flex justify-evenly overflow-hidden w-full mx-auto px-12">
        <div className="flex  space-x-4">
          {currentMovies.map((movie) => (
            <div className="shadow-2xl border rounded-xl " key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={next}
        className="absolute right-0 z-10 p-2 bg-gray-700 text-white rounded-full"
        disabled={currentIndex + itemsToShow >= movies.length}
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default MovieCarousel;
