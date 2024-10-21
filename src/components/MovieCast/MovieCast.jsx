import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await getMovieCast(movieId);
        console.log(data);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt=""
            />
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
