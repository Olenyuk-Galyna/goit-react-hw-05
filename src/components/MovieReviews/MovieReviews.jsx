import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await getMovieReviews(movieId);
        console.log(data);
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map((item) => (
          <li>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
