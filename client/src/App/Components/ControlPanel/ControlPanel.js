import React, { useState } from 'react';

import {
  ControlView,
  Button,
  ContolItemWrapper,
  TextField,
  ButtonLanding,
  RocketWrapper,
} from './styles';
import { ReactComponent as Rocket } from '../../../assets/rocket.svg';

export default function ControlPanel({ onCapsuleSubmit, onLandingPadSubmit }) {
  const [landingId, setLandingID] = useState('');
  const onChangingLanding = (e) => {
    setLandingID(e.target.value);
  };

  //Handle Enter key on search
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onLandingPadSubmit(event, landingId);
    }
  };

  return (
    <ControlView>
      <ContolItemWrapper>
        <Button onClick={onCapsuleSubmit}>Capsules</Button>
      </ContolItemWrapper>
      <ContolItemWrapper>
        <RocketWrapper>
          <Rocket />
        </RocketWrapper>
      </ContolItemWrapper>
      <ContolItemWrapper style={{ display: 'flex' }}>
        <TextField size="15" onKeyDown={handleKeyDown} onChange={onChangingLanding}></TextField>
        <ButtonLanding onClick={(event) => onLandingPadSubmit(event, landingId)}>
          Landing Pad
        </ButtonLanding>
      </ContolItemWrapper>
    </ControlView>
  );
}
