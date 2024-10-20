import React from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return <div>MovieReviews</div>;
};

export default MovieReviews;
