import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Application } from './styles';

import HomePage from './Containers/HomePage';

const App = () => (
  <>
    <Application>
      <HomePage />
    </Application>
    <GlobalStyle />
  </>
);

export default hot(App);
