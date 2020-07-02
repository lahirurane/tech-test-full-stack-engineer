import React from 'react';
import { ConsoleView } from './styles';

export default function Console({ jsonData }) {
  console.log(jsonData);
  return (
    <ConsoleView>
      <pre>{jsonData ? JSON.stringify(jsonData, null, 2) : ''}</pre>
    </ConsoleView>
  );
}
