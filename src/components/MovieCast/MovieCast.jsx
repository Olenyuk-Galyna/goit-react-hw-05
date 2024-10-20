import React from "react";

const MovieCast = () => {
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return <div>
    MovieCast

  </div>;
};

export default MovieCast;
