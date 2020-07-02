import { createStore, combineReducers, compose } from 'redux';

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const reducers = {
  spaceData: (
    oldState = { consoleType: '', isLoading: false, error: null, capsule: null, landing: null },
    action
  ) => {
    const { type } = action;
    const data = action.payload && action.payload.result ? action.payload.result : null;

    switch (type) {
      case 'SET_CONSOLE_DATA_CAPSULE':
        return {
          ...oldState,
          consoleType: 'capsule',
          capsule: data,
          isLoading: false,
        };
      case 'SET_CONSOLE_DATA_LANDING':
        return {
          ...oldState,
          consoleType: 'landing',
          landing: data,
          isLoading: false,
        };
      case 'SET_LOADING':
        return {
          ...oldState,
          isLoading: action.payload,
        };
      case 'SET_ERROR':
        let errorMessage = '';

        if (data.error) {
          errorMessage = data.error;
        }
        return {
          ...oldState,
          error: errorMessage,
          isLoading: false,
        };
      case 'SET_CONSOLE_TYPE':
        return {
          ...oldState,
          consoleType: action.payload,
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
