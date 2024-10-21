import React, { useEffect, useState } from "react";
import { getTrendingFilms } from "../api/api";
import MovieList from "../components/MovieList/MovieList";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTrendingFilms();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>Trending tuday</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
