import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavouritesContext from '../../store/favourites-context';

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
              to='/'
            >
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
              to='/new-meetup'
            >
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
              to='/favourites'
            >
              My Favourites
              <span className={classes.badge}>
                {favouritesCtx.totalFavourites}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
