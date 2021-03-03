import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import defaultTheme from './pages/styles/default';
import {ContextProvider} from './hooks/index';

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <StatusBar barStyle="default" backgroundColor="#000" />
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
