import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Navigation from './src/navigation/index'

import {requestUserPermission, notificationListener} from './src/utiles/notificationService'

const App = () => {

  useEffect(() => {
    
    requestUserPermission()
    notificationListener()
     
    }, [])



  return (
   <Navigation/>
  )
}

export default App

const styles = StyleSheet.create({})