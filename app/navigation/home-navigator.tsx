import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialScreen } from '../screens';

type HomeParams = {
  Initial: undefined;
  Start: undefined;
};

const Stack = createNativeStackNavigator<HomeParams>();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Initial" component={InitialScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
