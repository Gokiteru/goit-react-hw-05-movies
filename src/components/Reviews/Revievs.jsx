import React from 'react';
import css from './revievs.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/api';

const Revievs = () => {
  const [revievs, setRevievs] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getReviews(movieId);
        setRevievs(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <section className={css.section}>
        {isLoading ? (
        <div>Loading...</div>
        ) : (
            <>
            {revievs.length > 0 && 
            revievs.map(({id, author, content}) => (
                <div className={css.wrapper}>
                    <li className={css.li} key={id}>
                        <p>
                            <b>Author: {author}</b>
                        </p>
                    </li>
                </div>
            ))}
            </>
        )}
        {!revievs.length && <p>There no revievs for this film.</p>}
    </section>
  );
};

export default Revievs;