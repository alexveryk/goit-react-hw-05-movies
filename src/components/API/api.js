import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cc9b731996eb433c4f02d82e82c7e11c';
const page = 1;

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return response;
};

export const getMovie = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return response;
};

export const getGenres = async () => {
  const response = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
  );
  return response;
};

export const getCedits = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return response;
};

export const getReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&page=1`
  );
  return response;
};
