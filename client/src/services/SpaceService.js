import axios from 'axios';

export const getCapsules = (dispatch) => {
  setLoading(dispatch, true);
  axios
    .get('http://localhost:4000/api/capsules')
    .then((res) => {
      dispatch({
        type: 'SET_CONSOLE_DATA_CAPSULE',
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log('err', err);
      dispatch({
        type: 'SET_ERROR',
        payload: err.response && err.response.data,
      });
    });
};

//Get Landing pad details
export const getLandingPad = (dispatch, landingId) => {
  setLoading(dispatch, true);
  axios
    .get(`http://localhost:4000/api/landingpad/${landingId}`)
    .then((res) => {
      dispatch({
        type: 'SET_CONSOLE_DATA_LANDING',
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log('err', err);
      dispatch({
        type: 'SET_ERROR',
        payload: err.response && err.response.data,
      });
    });
};

export const setErrorEmpty = (dispatch) => {
  dispatch({
    type: 'SET_ERROR',
    payload: { result: { error: '' } },
  });
};

const setLoading = (dispatch, isLoading) => {
  dispatch({
    type: 'SET_LOADING',
    payload: isLoading,
  });
};
