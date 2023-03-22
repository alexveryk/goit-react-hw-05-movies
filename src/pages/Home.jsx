import { getTrending } from 'components/API/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MainHeader, List, ListItem, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await getTrending();

        if (!response.data.total_results) {
          console.log('Not Movies found! :(');
        }

        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MainHeader>Trending today</MainHeader>
      {loading && <p>Loading...</p>}
      <List>
        {movies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Home;
