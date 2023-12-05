import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { WelcomeScreen } from '@screens/WelcomeScreen';
import { StepTowardScreen } from '@screens/StepTowardScreen';
import { HabitsScreen } from '@screens/HabitsScreen';

const Stack = createStackNavigator();

const BaseApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      >
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='StepToward' component={StepTowardScreen} />
        <Stack.Screen name='Habits' component={HabitsScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default BaseApp