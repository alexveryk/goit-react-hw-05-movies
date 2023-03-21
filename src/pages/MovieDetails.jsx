import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovie } from 'components/API/api';
import { MovieWrapper, StyledLink } from './MovieDetails.styled';
// import { Suspense } from 'react';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const backLinkref = useRef(location.state?.from ?? '/movies');

  const { movieiId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getMovie(movieiId);

        // console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieiId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <StyledLink to={backLinkref.current}>Go back</StyledLink>
      <MovieWrapper>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt=""
          />
        </div>
        <div>
          <h1>{`${movie.original_title}`}</h1>
          <p>{`User score: ${movie.popularity}`}</p>
          <h2>Overview</h2>
          <p>{`${movie.overview}`}</p>
          <h3>Genres</h3>
          <p></p>
        </div>
      </MovieWrapper>
      <ul>
        <li>
          <Link to="credits">credits</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
