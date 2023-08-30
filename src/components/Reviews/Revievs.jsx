import React from 'react';
import css from './revievs.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/api';

const Revievs = () => {
  const [revievs, setRevievs] = useState([]);
  const { movieID } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getReviews(movieID);
        setRevievs(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieID]);

  return (
    <section className={css.section}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {revievs.length > 0 &&
            revievs.map(({ id, author, content }) => (
                <li className={css.li} key={id}>
                  <b>Author: {author}</b>
                  <p>{content}</p>
                </li>
            ))}
        </>
      )}
      {!revievs.length && <p>There no revievs for this film.</p>}
    </section>
  );
};

export default Revievs;
