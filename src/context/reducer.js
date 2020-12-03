import { currentSeason, series } from './data';

export const initialState = {
  series: series,

  currentSeason: currentSeason,
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
        series: action.series,
      };
      setLocalStorage(state);
      return newState;
    }

    case actions.UPDATE_SEASON: {
      localStorage.setItem('currentSeason', action.season);
      newState = {
        ...state,
        currentSeason: action.season,
      };
      setLocalStorage(state);
      return newState;
    }

    default: {
      newState = state;
      setLocalStorage(state);
      return newState;
    }
  }
};

const setLocalStorage = (state) => {
  localStorage.setItem('flixphilia-data', JSON.stringify(state));
};
