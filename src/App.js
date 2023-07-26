import { Routes, Route, redirect, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getToken,
  isAuthenticated,
} from './redux/authentication/auth-selectors';
import { getLoadingStatus } from './redux/loading-selector';

import SideBar from './components/sidebar/Sidebar';
import Loader from './loader/Loader';
import SignUp from './components/views/signup/SignUpView';
import Login from './components/views/login/LoginView';
import HomePage from './components/homePage/HomePage';

const RecipesPage = lazy(() =>
  import('./components/recipes/recipesPage/RecipesPage')
);
const Wishlist = lazy(() => import('./components/wishlist/Wishlist'));
const PlannerPage = lazy(() =>
  import('./components/planner/plannerPage/PlannerPage')
);
const PlannerList = lazy(() =>
  import('./components/planner/plannerList/PlannerList')
);
const ShoppingList = lazy(() =>
  import('./components/shoppingList/ShoppingList')
);

function App({ token, loading }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      return navigate('/recipesearch', { replace: true });
    }

    return navigate('/', { replace: true });
  }, [token]);

  return (
    <>
      <div data-component="sidebar" id="sideBarWrapper">
        <SideBar />
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="signup" restricted element={<SignUp />} />
            <Route path="login" restricted element={<Login />} />
          </Route>
          <Route path="recipesearch/*" element={<RecipesPage />} />
          <Route path="wishlist/*" element={<Wishlist />} />
          <Route path="planner/*" element={<PlannerPage />}>
            <Route path=":date" element={<PlannerList />} />
          </Route>

          <Route path="wishlist/*" element={<Wishlist />} />
          <Route path="shoppingList" element={<ShoppingList />} />
        </Routes>
      </Suspense>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
  token: getToken(state),
  loading: getLoadingStatus(state),
});

export default connect(mapStateToProps)(App);
