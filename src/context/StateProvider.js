import React, { createContext, useContext, useReducer } from 'react';

import { AuthProvider } from './AuthProvider';
import propTypes from 'prop-types';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    <AuthProvider>{children}</AuthProvider>
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

StateProvider.propTypes = {
  reducer: propTypes.func.isRequired,
  initialState: propTypes.object.isRequired,
  childern: propTypes.any,
};
