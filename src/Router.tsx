import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

import FirstPage from './pages/auth/FirstPage';
import ConfirmOTP from './pages/auth/ConfirmOTP';

const Router = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="FirstPage" 
        screenOptions={{ 
          headerShown:false ,
          headerStyle:{
            backgroundColor:'black'
          },
          headerTintColor:'black'
        }}
      >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default Router;