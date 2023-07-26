import { lazy } from 'react';
import { connect } from 'react-redux';

import { getRecipesList } from '../../../redux/recipes/recipes-selectors';
import { getLoadingStatus } from '../../../redux/loading-selector';

import Loader from '../../../loader/Loader';
import RecipesForm from '../recipesForm/RecipesForm';

import style from './_recipesPage.module.scss';

const RecipesList = lazy(() =>
  import('../../../components/recipes/recipesList/RecipesList')
);

function RecipesPage({ recipesList, loadingStatus }) {
  return (
    <section className={style.section}>
      <RecipesForm />
      {loadingStatus ? <Loader /> : null}
      {recipesList.length > 0 ? <RecipesList /> : null}
    </section>
  );
}

const mapStateToProps = (state) => ({
  recipesList: getRecipesList(state),
  loadingStatus: getLoadingStatus(state),
});

export default connect(mapStateToProps)(RecipesPage);
