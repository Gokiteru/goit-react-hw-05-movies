import React from 'react';
import css from './movieList.module.css';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

const MovieList = ({ trending, loading }) => {
  const location = useLocation();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className={css.ul}>
          {trending.map(({ id, title, name }) => (
            <li className={css.li} key={id}>
              <Link className={css.link} to={`movies/${id}`} state={{ from: location.pathname }}>
                {title || name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

MovieList.prototype = {
    trending : PropTypes.arrayOf(PropTypes.object),
    loading : PropTypes.bool
}

export default MovieList;