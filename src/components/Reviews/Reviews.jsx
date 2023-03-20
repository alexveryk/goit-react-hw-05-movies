import { useParams } from 'react-router-dom';
import { getReviews } from 'components/API/api';
import { useState } from 'react';
import { useEffect } from 'react';

export const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { movieiId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getReviews(movieiId);

        setReviews(response.data.results);
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
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.author}>
                Author: {`${review.author}`}
                <p>`${review.content}`</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
