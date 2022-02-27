import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  InitialScreen, 
  StartScreen, 
  PhoneNumberScreen ,
  SmsCheckScreen
} from '../screens';

//import { navigationRef } from '../services/navigator';

type RootParams = {
  Initial: undefined;
  Start: undefined;
  PhoneNumber: undefined;
  SmsCheck: undefined
};


const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer
  /* ref={navigationRef} */
  >
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={{ headerLeft: () => null, headerShown: false }}
      />
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerLeft: () => null, headerShown: false }}
      />
      <Stack.Screen
        name="PhoneNumber"
        component={PhoneNumberScreen}
        options={{ headerLeft: () => null, headerShown: false }}
      /> 
      <Stack.Screen
        name="SmsCheck"
        component={SmsCheckScreen}
        options={{ headerLeft: () => null, headerShown: false }}
      /> 
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
