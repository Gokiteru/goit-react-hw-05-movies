import { useEffect, useState, Suspense } from 'react';
import {
  Outlet,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';
import { getMovieById } from 'components/api';
import css from './movieDetails.module.css';

const imageURL = 'https://image.tmdb.org/t/p/w500/';
const blankImage = '';

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const cameBack = location.state?.form ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieById(movieID);
        setMovie(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieID]);

  if (movie) {
    const { genres, title, release_date, overview, vote_average, poster_path } = movie;
    const imageSRC = poster_path ? imageURL + poster_path : blankImage;
    const userScore = Math.round((Number(vote_average) * 100) / 10);
    const movieGenres = genres.map(genre => genre.name).join(' ');
    const releaseDate = release_date.slice(0, 4);

    return (
      <>
        <section className={css.wrapper}>
          <Link className={css.backButton} to={cameBack}>Go back</Link>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className={css.movieCard}>
              <div className={css.imageWrapper}>
                <img src={`${imageSRC}`} alt={title} />
              </div>
              <div className={css.movieInfo}>
                <h2 className={css.title}>
                  {title} {releaseDate && `(${releaseDate})`}
                </h2>
                <ul>
                  <li className={css.li}>
                    {userScore > 0 && <p>User score: {userScore}%</p>}
                  </li>
                  <li className={css.li}>
                    <b>Genres</b>
  
                    <p>{overview}</p>
                  </li>
                  <li className={css.li}>
                    <b>Genres</b>
  
                    <p>{movieGenres || ' - '}</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>
  
        <div className={css.extraInfo}>
          <h3 className={css.extraInfoTitle}>Additional information</h3>
          <div>
            <ul>
              <li className={css.extraListItem}>
                <Link to="cast" state={cameBack} className={css.link}>
                  Cast
                </Link>
              </li>
  
              <li className={css.extraListItem}>
                <Link to="reviews" state={cameBack} className={css.link}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
  
        <Suspense>
          <Outlet />
        </Suspense>
      </>
    );
  } else {
    return(<p>Loading...</p>)
  }
};

export default MovieDetails;
