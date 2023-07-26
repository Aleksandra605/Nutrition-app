import { createReducer } from '@reduxjs/toolkit';

import {
  fetchPlannerSuccess,
  addToPlannerSuccess,
  removeFromPlannerSuccess,
} from './planner-actions';

const initialState = [];

const plannerReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPlannerSuccess, (state, { payload }) => {
    return [...payload.plannerList];
  });

  //todo fix code below. Item should be added without updating the whole list
  builder.addCase(addToPlannerSuccess, (state, { payload }) => {
    return [payload, ...state];
  });

  builder.addCase(removeFromPlannerSuccess, (state, { payload }) => {
    const newState = [...state];
    const item = newState.find(
      (el) => el.date === payload.date && el.mealType === payload.mealType
    );
    const itemIndex = newState.findIndex(
      (el) => el.date === payload.date && el.mealType === payload.mealType
    );
    if (item.meals.length > 1) {
      const filteredItem = item.meals.filter((el) => el.uri !== payload.uri);

      newState.splice(itemIndex, 1, { ...item, meals: filteredItem });
      return newState;
    } else if (item.meals.length === 1) {
      return [...state.filter((el) => el.mealType !== payload.mealType)];
    }
  });
});

export default plannerReducer;
