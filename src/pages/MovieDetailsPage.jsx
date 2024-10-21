import React, { useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../api/api";
import { useEffect, useState } from "react";

export const MovieDetailsPage = () => {
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const goBackRef = useRef(location.state || "/");

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <div>
          <h1>{movie.title}</h1>
          <p>Average {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres:</h2>
          <ul>
            {movie.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Review</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
