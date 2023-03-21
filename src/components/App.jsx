import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import { Credits } from './Credits/Credits';
import { Reviews } from './Reviews/Reviews';
import { Containet, NavMenu, NavLinkStyled } from './App.styled';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <Containet>
      <NavMenu>
        <NavLinkStyled to="/" end>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </NavMenu>
      <Suspense fallback={<div>Loading... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />{' '}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieiId" element={<MovieDetails />}>
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Containet>
  );
};
