import React, { useState } from 'react';

import { ControlView, Button } from './styles';
import { ReactComponent as Rocket } from '../../../assets/rocket.svg';

export default function ControlPanel({ onCapsuleSubmit, onLandingPadSubmit }) {
  const [landingId, setLandingID] = useState('');
  const onChangingLanding = (e) => {
    setLandingID(e.target.value);
  };
  return (
    <ControlView>
      <Button onClick={onCapsuleSubmit}>Capsules</Button>
      <Rocket />
      <input size="15" onChange={onChangingLanding}></input>
      <Button onClick={(event) => onLandingPadSubmit(event, landingId)}>Landing Pad</Button>
    </ControlView>
  );
}
