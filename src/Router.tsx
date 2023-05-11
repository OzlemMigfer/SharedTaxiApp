import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import FirstPage from './pages/auth/FirstPage';

export class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown:false }}>
          <Stack.Screen name="FirstPage" component={FirstPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Router;