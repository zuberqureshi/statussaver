import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TopStack from './TopStack';
import MainStack from './MainStack';
import DrawerStack from './DrawerStack';
const index = () => {
  return (
   <NavigationContainer>
 {/* <MainStack/> */}
 {/* <TopStack/> */}
 <DrawerStack/>
   </NavigationContainer>
  )
}

export default index