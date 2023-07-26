import { useReducer, useState } from 'react';
import { connect } from 'react-redux';

import { fetchRecipe } from '../../../redux/recipes/recipes-operations';
import {
  dietLabels,
  healthLabels,
  cuisineTypeLabels,
  dishTypeLabels,
  mealTypeLabels,
} from './labels';
import { objectCreator, formReducer } from './helpers';

import DropdownMenu from './DropdownMenu';
import SvgGenerator from '../../svgGenerator/SvgGenerator';
import Chips from './Chips';

import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import s from './_recipesForm.module.scss';

//........................................................................

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2s',
  },
});

const initialState = {
  query: '',
  diet: [],
  health: [],
  cuisineType: [],
  dishType: [],
  mealType: [],
};

////////////////////   Component  /////////////////////

function RecipesForm({ fetchRecipes }) {
  const [state, dispatcher] = useReducer(formReducer, initialState);
  const [formVisibility, setFormVisibility] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    let obj = {};

    const formState = objectCreator(obj, state);

    fetchRecipes(formState);
  }

  const inputHandler = ({ name, value }) => {
    return dispatcher({ type: name, payload: value });
  };

  const chipsRemover = (value) => {
    for (let key in state) {
      if (typeof state[key] === 'string') {
        continue;
      }

      if (state[key].length < 0) {
        continue;
      }

      if (state[key].includes(value)) {
        return dispatcher({ type: key, payload: value });
      }
    }

    return;
  };

  return (
    <form id="form" className={s.form} onSubmit={submitForm}>
      <div className={s.queryBox}>
        <input
          type="text"
          className={s.input}
          placeholder="Enter your request"
          onChange={(e) => {
            inputHandler(e.target);
          }}
          label="Enter your request"
          name="query"
          autoComplete="false"
          id="query"
        ></input>
        <button className={s.buttonSubmit} onClick={submitForm} type="submit">
          <SvgGenerator name="icon__search2" />
        </button>
        <button
          type="button"
          className={`${s.toggleButton} ${formVisibility ? s.open : s.close}`}
          onClick={() => setFormVisibility(!formVisibility)}
        >
          {formVisibility ? (
            <SvgGenerator name="filter" />
          ) : (
            <SvgGenerator name="filter" />
          )}
        </button>
      </div>

      <div
        className={`${s.filtersWrapper} ${
          formVisibility ? s.visible : s.notVisible
        }`}
      >
        {formVisibility && (
          <div>
            <DropdownMenu
              state={state.diet}
              labels={dietLabels}
              handleEvent={inputHandler}
              text={'Diet option'}
              name={'diet'}
            />
            <DropdownMenu
              state={state.health}
              labels={healthLabels}
              handleEvent={inputHandler}
              text={'Health option'}
              name={'health'}
            />
            <DropdownMenu
              state={state.cuisineType}
              labels={cuisineTypeLabels}
              handleEvent={inputHandler}
              text={'Cuisine type'}
              name={'cuisineType'}
            />
            <DropdownMenu
              state={state.dishType}
              labels={dishTypeLabels}
              handleEvent={inputHandler}
              text={'Dish type'}
              name={'dishType'}
            />
            <DropdownMenu
              state={state.mealType}
              labels={mealTypeLabels}
              handleEvent={inputHandler}
              text={'Meal type'}
              name={'mealType'}
            />
          </div>
        )}
        {[
          ...state.diet,
          ...state.health,
          ...state.cuisineType,
          ...state.dishType,
          ...state.mealType,
        ].length > 0 && formVisibility ? (
          <Chips
            data={[
              ...state.diet,
              ...state.health,
              ...state.cuisineType,
              ...state.dishType,
              ...state.mealType,
            ]}
            handleClick={chipsRemover}
          />
        ) : null}
      </div>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (data) => {
    return dispatch(fetchRecipe(data));
  },
});

export default connect(null, mapDispatchToProps)(RecipesForm);
