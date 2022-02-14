import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {  
  InitialScreen,
  ChooseYourTeam ,
  ChooseYourCharacter
        } 
from '../screens';

type RootNavigatorParams = {
  Initial: undefined;
  ChooseYourTeam: undefined;
  ChooseYourCharacter: undefined
};

const Stack = createNativeStackNavigator<RootNavigatorParams>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Initial" 
          component={InitialScreen}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="ChooseYourTeam" 
          component={ChooseYourTeam} 
          options={{headerLeft: () => null, headerShown: false}}
        />
        <Stack.Screen 
          name="ChooseYourCharacter" 
          component={ChooseYourCharacter} 
          options={{headerLeft: () => null, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export interface RootNavigatorScreenProps<RouteName extends keyof RootNavigatorParams> {
  route: RouteProp<RootNavigatorParams, RouteName>;
  navigation: NativeStackNavigationProp<RootNavigatorParams, RouteName>;
}

export default RootNavigator;
