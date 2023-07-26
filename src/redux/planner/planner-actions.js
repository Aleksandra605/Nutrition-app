import { createAction } from '@reduxjs/toolkit';

export const addToPlannerRequest = createAction('planner/addToPlannerRequest');
export const addToPlannerSuccess = createAction('planner/addToPlannerSuccess');
export const addToPlannerError = createAction('planner/addToPlannerError');

export const fetchPlannerRequest = createAction('planner/fetchPlannerRequest');
export const fetchPlannerSuccess = createAction('planner/fetchPlannerSuccess');
export const fetchPlannerError = createAction('planner/fetchPlannerError');

export const removeFromPlannerRequest = createAction(
  'planner/removeFromPlannerRequest'
);
export const removeFromPlannerSuccess = createAction(
  'planner/removeFromPlannerSuccess'
);
export const removeFromPlannerError = createAction(
  'planner/removeFromPlannerError'
);
