import { getTrending } from 'components/API/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await getTrending(page);

        if (!response.data.total_results) {
          console.log('Not Movies found! :(');
        }

        setMovies(response.data.results);
        setTotalHits(response.data.total_results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
