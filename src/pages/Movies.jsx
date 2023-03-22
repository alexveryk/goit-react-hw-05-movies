import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'components/API/api';
import { useEffect, useState } from 'react';

import {
  List,
  ListItem,
  StyledLink,
  Form,
  InputForm,
  Btn,
} from './Movies.styled';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const query = searchParams.get('query');

  const hendleSubmit = event => {
    event.preventDefault();

    setMovies([]);

    setSearchParams({ query: event.target.search.value });
    event.target.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    }
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
      <Form onSubmit={hendleSubmit}>
        <InputForm type="text" name="search" />
        <Btn type="submit">Search</Btn>
      </Form>
      {loading && <p>Loading...</p>}
      {Boolean(query) && (
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Movies;
