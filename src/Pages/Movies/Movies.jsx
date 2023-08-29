import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { Input, Button } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMoviesByName } from 'components/api';
import css from './movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const movieName = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    if (!query) {
      toast('Enter please a movie name.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!movieName) {
        return;
      }
      setIsLoading(true);
      try {
        const data = await getMoviesByName(movieName);
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieName]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <Input
          className={css.input}
          type="text"
          name="movie"
          placeholder="Enter the movie..."
          autoComplete="off"
          color="secondary"
          defaultValue={movieName}
        />
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          size="small"
          endIcon={<AiOutlineSearch />}
        ></Button>
      </form>
      <ToastContainer />
      <>
        {isLoading && <p>Loading...</p>}
        {movieName && (
          <ul className={css.list}>
            {movies.map(({ id, title, name }) => (
              <li className={css.li} key={id}>
                <Link
                  to={`${id}`}
                  state={{ form: fullPath }}
                  className={css.link}
                >
                  {title || name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default Movies;
