import { NavLink } from 'react-router-dom';
import s from './_homePage.module.scss';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <section className={s.section}>
      <header className={s.header}>
        <div className={s.navigation}>
          <NavLink to="login" className={s.navLink}>
            Login
          </NavLink>
          <NavLink to="signup" className={s.navLink}>
            Signup
          </NavLink>
        </div>
      </header>

      <Outlet />
    </section>
  );
}

export default HomePage;
