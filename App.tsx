/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/stackNavigator';
import { Text, View } from 'react-native';

// Main entry component of the app
const App = (): React.JSX.Element => {
  return (
    <View>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </View>
  );
};

export default App;