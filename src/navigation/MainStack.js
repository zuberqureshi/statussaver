import { View, Text } from 'react-native'
import React from 'react'
import TopStack from './TopStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const mainStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Top" component={TopStack} />

  </Stack.Navigator>
  )
}

export default mainStack