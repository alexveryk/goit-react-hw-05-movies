import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'components/API/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const hendleSubmit = event => {
    event.preventDefault();

    const searchQuery = event.target.search.value;

    if (!searchQuery) {
      setSearchParams({});
      return;
    }

    setSearchParams({ query: event.target.search.value });
    event.target.reset();
  };

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await searchMovies(query);

        if (!response.data.results) {
          console.log('nothing found');
          return;
        }
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {Boolean(query) && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
