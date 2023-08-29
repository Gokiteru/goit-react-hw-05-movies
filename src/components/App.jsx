import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const SharedLayout = lazy(() => import('./Header/SharedLayout'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Revievs'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </>
  );
};