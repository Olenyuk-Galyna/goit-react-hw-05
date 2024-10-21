import React, { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api/api";
import MovieList from "../components/MovieList/MovieList";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams({ query: value });
  };

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        const data = await searchMovies(query);
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [query]);

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="search" />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
