export const initialState = {
  series: undefined,
  user: {
    displayName: undefined,
    email: undefined,
    photoURL: undefined,
    uid: undefined,
  },
};

export const actions = {
  UPDATE_SERIES: 'UPDATE_SERIES',
  UPDATE_USER: 'UPDATE_USER',
  SET_USER: 'SET_USER',
};

export const reducer = (state, action) => {
  console.log('Reducer Called!', action);

  switch (action.type) {
    case actions.UPDATE_SERIES:
      return {
        ...state,
        series: action.series,
      };

    case actions.UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };

    case actions.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
