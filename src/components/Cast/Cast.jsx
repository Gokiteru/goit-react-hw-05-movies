import React from 'react';
import css from './cast.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'components/api';

const imageURL = 'https://image.tmdb.org/t/p/w500';
const blankImage = '';

const Cast = () => {
  const { movieID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const cast = await getCredits(movieID);
        setCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieID]);

  if (cast) {
    return (
      <section className={css.section}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className={css.ul}>
            {cast.map(({ id, profile_path, name, character }) => {
              const imageSRC = profile_path
                ? imageURL + profile_path
                : blankImage;
              return (
                <li key={id} className={css.li}>
                  <img scr={imageSRC} alt={name} width={200} height={300} />
                  <div>
                    <p>
                      <span>{name}</span>
                    </p>
                    {character ? (
                      <p>
                        <b>Character</b>
                        <span>{character}</span>
                      </p>
                    ) : (
                      <p>
                        <b>Character</b>
                        <span>Unknown</span>
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {!cast.length && (
          <p>There is no information about the cast of thiss film</p>
        )}
      </section>
    );
  }
};

export default Cast;
