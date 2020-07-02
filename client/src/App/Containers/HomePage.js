import React from 'react';
import { HomePageWrapper, ConsoleWrapper, ControlWrapper } from '../styles';
import Console from '../Components/Console/Console';
import ControlPanel from '../Components/ControlPanel/ControlPanel';
import { useSelector, useDispatch } from 'react-redux';
import { getCapsules, getLandingPad } from '../../services/SpaceService';

export default function HomePage() {
  const { consoleData, isLoading, error } = useSelector((state) => state.spaceData);
  const dispatch = useDispatch();

  console.log(consoleData, isLoading, error);

  const onCapsuleSubmit = () => {
    getCapsules(dispatch);
  };

  const onLandingPadSubmit = (event, landingId) => {
    const { isValidInput, message } = validateInput(landingId);

    if (isValidInput) {
      getLandingPad(dispatch, landingId);
    } else {
      //Show error message
      console.log('input error', message);
    }
  };

  const validateInput = (input) => {
    let isValid = true;
    const message = [];

    if (!input) {
      isValid = false;
      message.push(`Input Cannot be empty`);
    }
    if (input && ['#', '$', '%', '&'].indexOf(input) !== -1) {
      isValid = false;
      message.push(`Input Cannot contain any '#','$','%','&' characters`);
    }

    return { isValidInput: isValid, message };
  };
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
