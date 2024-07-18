/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Router from './src/routes';
import {Provider} from 'react-redux';
import configureStore from './src/reduxStore';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs()
const store = configureStore();
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
