import React from 'react';
import { HomePageWrapper, ConsoleWrapper, ControlWrapper } from '../styles';
import Console from '../Components/Console/Console';
import ControlPanel from '../Components/ControlPanel/ControlPanel';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const { consoleData, isLoading, error } = useSelector((state) => state.spaceData);

  console.log(consoleData, isLoading, error);

  return (
    <HomePageWrapper>
      <ConsoleWrapper>
        <Console jsonData={consoleData} />
      </ConsoleWrapper>
      <ControlWrapper>
        <ControlPanel />
      </ControlWrapper>
    </HomePageWrapper>
  );
}
