import React, { useState } from 'react';
import { HomePageWrapper, ConsoleWrapper, ControlWrapper } from '../styles';
import Console from '../Components/Console/Console';
import ControlPanel from '../Components/ControlPanel/ControlPanel';
import { useSelector, useDispatch } from 'react-redux';
import { getCapsules, getLandingPad, setErrorEmpty } from '../../services/SpaceService';

export default function HomePage() {
  const { consoleType, isLoading, error, capsule, landing } = useSelector(
    (state) => state.spaceData
  );
  const [inputError, setInputError] = useState('');
  const dispatch = useDispatch();

  //Trigger on Capsule Btn
  const onCapsuleSubmit = (event) => {
    setInputError('');
    setErrorEmpty(dispatch);
    if (!capsule && event) {
      getCapsules(dispatch);
    } else {
      dispatch({
        type: 'SET_CONSOLE_TYPE',
        payload: 'capsule',
      });
    }
  };

  //Trigger on Landing Pad Btn
  const onLandingPadSubmit = (event, landingId) => {
    //Clear Errors
    setInputError('');
    setErrorEmpty(dispatch);
    const { isValidInput, message } = validateInput(landingId);

    if (isValidInput) {
      //Check available landing details
      if (landing && landing.id.toUpperCase() === landingId.toUpperCase()) {
        //Dispatch console view type
        dispatch({
          type: 'SET_CONSOLE_TYPE',
          payload: 'landing',
        });
      } else {
        //Get Landing Pad details for ID
        getLandingPad(dispatch, landingId);
      }
    } else {
      //Show error message
      setInputError(message);
    }
  };

  const validateInput = (input) => {
    let isValid = true;
    let message = '';

    if (!input) {
      isValid = false;
      message = `Input Cannot be empty`;
    }
    if (input && new RegExp(/[$%&#]+/, 'g').test(input)) {
      isValid = false;
      message = `Input Cannot contain any '#','$','%','&' characters`;
    }

    return { isValidInput: isValid, message };
  };

  const consoleData = isLoading
    ? 'loading...'
    : error
    ? error
    : inputError
    ? inputError
    : consoleType === 'capsule' && capsule
    ? capsule
    : consoleType === 'landing' && landing
    ? landing
    : '';
  return (
    <HomePageWrapper>
      <ConsoleWrapper>
        <Console jsonData={consoleData} />
      </ConsoleWrapper>
      <ControlWrapper>
        <ControlPanel onCapsuleSubmit={onCapsuleSubmit} onLandingPadSubmit={onLandingPadSubmit} />
      </ControlWrapper>
    </HomePageWrapper>
  );
}
