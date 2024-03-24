import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movies);
  // console.log('movieData: ', movieData);

  return (
    movieData.nowPlaying && (
      <div className="bg-gray-500">
        <div className="-mt-24 relative z-20 ">
          <MoviesList title={"Now Playing"} movies={movieData?.nowPlaying} />
          <MoviesList title={"Trending"} movies={movieData?.nowPlaying} />
          <MoviesList title={"Popular"} movies={movieData?.nowPlaying} />
          <MoviesList title={"Upcoming"} movies={movieData?.nowPlaying} />
          <MoviesList title={"Horror"} movies={movieData?.nowPlaying} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
