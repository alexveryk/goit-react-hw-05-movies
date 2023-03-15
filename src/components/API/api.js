import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_KEY = 'cc9b731996eb433c4f02d82e82c7e11c';

export const getTrending = async page => {
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&page=${page}`
  );
  return response;
};
