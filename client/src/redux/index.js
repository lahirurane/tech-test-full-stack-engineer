import { createStore, combineReducers, compose } from 'redux';

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const reducers = {
  spaceData: (oldState = { consoleData: null, isLoading: false, error: null }, action) => {
    const { type } = action;
    switch (type) {
      case 'SET_CONSOLE_DATA':
        return {
          ...oldState,
          consoleData: action.payload,
          isLoading: false,
        };
      case 'SET_LOADING':
        return {
          ...oldState,
          isLoading: action.payload,
        };
      case 'SET_ERROR':
        return {
          ...oldState,
          error: action.payload,
          isLoading: false,
        };
      default:
        return oldState;
    }
  },
};

const slices = combineReducers({ ...reducers });

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose;

const store = createStore(slices, composeEnhancers());

export default store;
