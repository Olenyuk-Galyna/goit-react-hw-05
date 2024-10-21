import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = { api_key: "dce983882bd3c924c780e647ce0810f2" };

export const getTrendingFilms = async () => {
  const respons = await axios.get("/trending/movie/week");
  return respons.data;
};
export const searchMovies = async (query) => {
  const respons = await axios.get(`/search/movie?query=${query}`);
  return respons.data;
};

export const getMovieDetails = async (id) => {
  const respons = await axios.get(`/movie/${id}`);
  return respons.data;
};

export const getMovieCast = async (id) => {
  const respons = await axios.get(`/movie/${id}/credits`);
  return respons.data;
};

export const getMovieReviews = async (id) => {
  const respons = await axios.get(`/movie/${id}/reviews`);
  return respons.data;
};
