import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '6a8b72f51bae7833992788a940dbd14d';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/week?api_key=${KEY}`);

  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );

  return data;
};

export const getCredits = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}$language=en-US`
  );

  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}$language=en-US`
  );

  return data.results;
};

export const getMoviesByName = async query => {
  const data = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=true`
  );
  
  return data.data;
};
