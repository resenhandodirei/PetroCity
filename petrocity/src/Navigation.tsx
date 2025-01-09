import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../src/screens/Home/Home';
import CatsView from '../src/screens/CatsView/CatsView';
//import DogsView from './src/screens/DogsView/DogsView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CatsView" component={CatsView} />
        {/* <Stack.Screen name="DogsView" component={DogsView} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
