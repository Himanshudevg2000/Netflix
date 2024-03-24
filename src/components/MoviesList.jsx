import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  // console.log("movies: ", movies);
  return (
    <div className="px-6 py-2 text-white">
      <div className="">
        <h1 className="text-2xl mb-4 ml-1 font-bold">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
