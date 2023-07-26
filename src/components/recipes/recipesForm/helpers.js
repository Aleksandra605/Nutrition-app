function objectCreator(obj, state) {
  if (state.query !== '') {
    obj.q = state.query;
  }
  for (const key in state) {
    if (state[key].length > 0) {
      obj[key] = state[key];
    }
  }

  return obj;
}

const formReducer = (prevState, { type, payload }) => {
  switch (type) {
    case 'query':
      return { ...prevState, query: payload };

    case 'mealType':
      return prevState.mealType.includes(payload)
        ? {
            ...prevState,
            [type]: prevState[type].filter((el) => el !== payload),
          }
        : { ...prevState, mealType: [payload] };

    case `${type}`:
      return prevState[type].includes(payload)
        ? {
            ...prevState,
            [type]: prevState[type].filter((el) => el !== payload),
          }
        : { ...prevState, [type]: [...prevState[type], payload] };

    default:
      return;
  }
};

export { objectCreator, formReducer };
