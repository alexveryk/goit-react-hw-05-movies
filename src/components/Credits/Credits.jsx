import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCedits } from '../API/api';

export const Credits = () => {
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState([]);

  const { movieiId } = useParams();

  // console.log('Credits', movieiId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getCedits(movieiId);

        console.log('Credits response', response);
        setCredits(response.data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieiId]);

  return (
    <>
      {loading && <p>Loading...</p>}

      <ul>
        {credits.map(credit => {
          return (
            <li key={credit.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
                alt={credit.name}
              />
              <p>{credit.name}</p>
              <p>Character: {credit.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
