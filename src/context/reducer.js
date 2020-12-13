export const initialState = {
  currentSeries: {},
  currentSeason: 1,
};

export const actions = {
  UPDATE_SERIES: 'UPDATE_SERIES',
  UPDATE_SEASON: 'UPDATE_SEASON',
};

export const reducer = (state, action) => {
  console.log('Reducer Called!', action);
  let newState;

  switch (action.type) {
    case actions.UPDATE_SERIES: {
      newState = {
        ...state,
        currentSeries: action.series,
      };
      return newState;
    }

    case actions.UPDATE_SEASON: {
      localStorage.setItem('currentSeason', action.season);
      newState = {
        ...state,
        currentSeason: action.season,
      };
      return newState;
    }

    default: {
      newState = state;
      return newState;
    }
  }
};