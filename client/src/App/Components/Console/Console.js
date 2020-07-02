import React from 'react';
import { ConsoleView, StyledPre } from './styles';

export default function Console({ jsonData }) {
  return (
    <ConsoleView>
      <StyledPre>{jsonData ? JSON.stringify(jsonData, null, 2) : ''}</StyledPre>
    </ConsoleView>
  );
}
