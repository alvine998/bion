import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountBlocked from './src/pages/AccountBlocked';
import ReturningUser from './src/pages/ReturningUser';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Login';
import ForgotPassword from './src/pages/ForgotPassword';
import Fingerprint from './src/pages/Biometric/Fingerprint';
import Faceid from './src/pages/Biometric/Faceid';
import FingerFace from './src/pages/Biometric/FingerFace';
import ActiveFace from './src/pages/ActivatedBiometric/ActiveFace';
import ActiveFinger from './src/pages/ActivatedBiometric/ActiveFinger';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='account-blocked' screenOptions={{headerShown: false}}>
        <Stack.Screen name='account-blocked' component={AccountBlocked}/>
        <Stack.Screen name='reset-password' component={ReturningUser}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='forgot-password' component={ForgotPassword}/>
        <Stack.Screen name='bio-finger' component={Fingerprint}/>
        <Stack.Screen name='bio-fingerface' component={FingerFace}/>
        <Stack.Screen name='bio-face' component={Faceid}/>
        <Stack.Screen name='active-face' component={ActiveFace}/>
        <Stack.Screen name='active-finger' component={ActiveFinger}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
