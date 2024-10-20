import React from "react";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" className={buildLinkClass}>
        HomePage
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        MoviesPage
      </NavLink>
      <NavLink to="/movies/:movieId" className={buildLinkClass}>
        MovieDetailsPage
      </NavLink>
      <NavLink to="link" className={buildLinkClass}>
        NotFoundPage
      </NavLink>
    </div>
  );
};

export default Navigation;
