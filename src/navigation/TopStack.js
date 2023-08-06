import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Status from '../screens/Status/Status';
import Saved from '../screens/Saved/Saved';
import Help from '../screens/Help/Help';
import { useNavigation, useIsFocused } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const TopStack = () => {

  const navigation = useNavigation();
  // console.log("props",navigation)


    let n =5
  return (
    <Tab.Navigator screenOptions={{tabBarIndicatorStyle:{backgroundColor:'#fede3d'},tabBarActiveTintColor:'#fede3d',tabBarInactiveTintColor:'#ffffff',}} >
    <Tab.Screen name="Status" component={Status} options={{tabBarStyle:{backgroundColor:'#075e55'},tabBarLabel:`Status (${n})`}} />
    <Tab.Screen name="Saved" component={Saved} options={{tabBarStyle:{backgroundColor:'#075e55'},tabBarLabel:`Saved (${n})`,}}/>
    <Tab.Screen name="Help" component={Help} options={{tabBarStyle:{backgroundColor:'#075e55'}}}/>
  </Tab.Navigator>
  )
}

export default TopStack





