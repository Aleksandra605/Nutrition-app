import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './_sideBar.module.scss';

import {
  isAuthenticated,
  getToken,
} from '../../redux/authentication/auth-selectors';
import { logOut } from '../../redux/authentication/auth-operations';

import SvgGenerator from '../svgGenerator/SvgGenerator';

function Sidebar({ logout, token }) {
  return (
    <div className={s.sidebar}>
      {token !== null ? (
        <ul className={s.sidebar__menu}>
          <li className={s.menu__item} id="itemForm">
            <NavLink
              className={s.navLink}
              to="/recipesearch"
              style={({ isActive }) => ({
                color: isActive ? '#51655c' : null,
                fill: isActive ? '#51655c' : null,
              })}
            >
              <SvgGenerator name="sidebar__search-icon" />
              <span className={s.navLink__span}> Recipe search</span>
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink
              className={s.navLink}
              to="/wishlist"
              style={({ isActive }) => ({
                color: isActive ? '#51655c' : null,
                fill: isActive ? '#51655c' : null,
              })}
            >
              <SvgGenerator name="sidebar__wishlist-icon" />
              <span className={s.navLink__span}>Wishlist</span>
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink
              className={s.navLink}
              to="/planner"
              style={({ isActive }) => ({
                color: isActive ? '#51655c' : null,
                fill: isActive ? '#51655c' : null,
              })}
            >
              <SvgGenerator name="sidebar__planner-icon" />
              <span className={s.navLink__span}>Planner</span>
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink
              className={s.navLink}
              to="/shoppingList"
              style={({ isActive }) => ({
                color: isActive ? '#51655c' : null,
                fill: isActive ? '#51655c' : null,
              })}
            >
              <SvgGenerator name="sidebar__basket-icon" />
              <span className={s.navLink__span}>Shopping list</span>
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className={s.sidebar__menu}>
          <li className={s.menu__item} id="itemForm">
            <NavLink
              className={s.navLink}
              to="/recipesearch"
              style={({ isActive }) => ({
                color: isActive ? '#51655c' : null,
                fill: isActive ? '#51655c' : null,
              })}
            >
              <SvgGenerator name="sidebar__search-icon" />
              <span className={s.navLink__span}> Recipe search</span>
            </NavLink>
          </li>
        </ul>
      )}
      {token !== null ? (
        <button type="button" onClick={logout} className={s.logOutBtn}>
          <SvgGenerator name="logout" />
        </button>
      ) : (
        false
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
  token: getToken(state),
});

const mapDispatchToProps = {
  logout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
