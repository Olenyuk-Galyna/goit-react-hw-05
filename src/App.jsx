import { useState } from "react";
import { Routes, Route, Navigation } from "react-router-dom";
import css from "./App.css";
import HomePage from "path/to/pages/HomePage";
import MoviesPage from "path/to/pages/MoviesPage";
import MovieDetailsPage from "path/to/pages/MovieDetailsPage";
import MovieCast from "path/to/pages/MovieCast";
import MovieReviews from "path/to/pages/MovieReviews";
import NotFoundPage from "path/to/pages/NotFoundPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieList from "./components/MovieList/MovieList";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
          <Route path="list" element={<MovieList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
