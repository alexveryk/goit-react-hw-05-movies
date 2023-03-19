import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovie } from 'components/API/api';

export const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

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
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
      <h1>{`${movie.original_title}`}</h1>
      <p>{`User score: ${movie.popularity}`}</p>
      <h2>Overview</h2>
      <p>{`${movie.overview}`}</p>
      <h3>Genres</h3>
      <p></p>
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
