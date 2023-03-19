import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Credits } from './Credits/Credits';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieiId" element={<MovieDetails />}>
          <Route path="credits" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
