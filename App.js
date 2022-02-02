import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountBlocked from './src/pages/AccountBlocked';
import ReturningUser from './src/pages/ReturningUser';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Login';
import ForgotPassword from './src/pages/ForgotPassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='account-blocked' screenOptions={{headerShown: false}}>
        <Stack.Screen name='account-blocked' component={AccountBlocked}/>
        <Stack.Screen name='reset-password' component={ReturningUser}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='forgot-password' component={ForgotPassword}/>
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
