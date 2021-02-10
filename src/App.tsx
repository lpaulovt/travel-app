import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import defaultTheme from './pages/styles/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <StatusBar barStyle="default" backgroundColor="#000" />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
