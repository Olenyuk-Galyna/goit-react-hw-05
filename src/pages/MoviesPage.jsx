import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import style from "./MoviesPage.module.css"

export const MoviesPage = () => {
  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };
 
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="search" />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default MoviesPage;
