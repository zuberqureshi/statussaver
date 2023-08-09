import { FlatList, Image, StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopStack from './TopStack';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontA from 'react-native-vector-icons/FontAwesome6';
import WABusiness from '../screens/WABusiness/WABusiness';
import CustomDrawer from '../components/CustomDrawer';
import Splash from '../screens/Splash/Splash';



const Drawer = createDrawerNavigator();


 function DrawerStack(props) {


  const [splashShow, setSplashShow] = useState(true)


  const load = ()=>{

    

    setTimeout(() => {
      setSplashShow(false)
     }, 2000);
  }

  useEffect(() => {
   
    
    load()

    console.log(" inside useeffect Drawer  ");
  
  }, []);


  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} /> }
       screenOptions={{
        drawerLabelStyle:{marginLeft:responsiveWidth(-5),fontSize:responsiveFontSize(1.9)},
        drawerActiveBackgroundColor:'#e1ebea',
        drawerActiveTintColor:'#075e55',
        drawerInactiveTintColor:'#333',
        

       }}
     >

     { splashShow &&  <Drawer.Screen name='Splash' component={Splash} options={{headerShown:false}} />}
      <Drawer.Screen name="Top" component={TopStack} options={{headerStyle:{
        backgroundColor:'#075e55',
      
        shadowColor:'transparent' 
       
      },headerTitle:'WA',
        headerTintColor:'#fff',
        

        headerRight: () =>
      (

        <View style={{ flexDirection: 'row',gap:responsiveWidth(5) }}>
          <MCIcon onPress={() => { }} name="whatsapp" size={responsiveWidth(6)} color="#fff" />
          <TouchableOpacity onPress={() => {  }}>
            <MCIcon name="dots-vertical" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(4) }} />
          </TouchableOpacity>
        </View>

      ),
     drawerIcon:({color}) => (
        <MCIcon onPress={() => { }} name="whatsapp" size={responsiveWidth(6)} color={color} />
     )
    
   

      
      }} />
      <Drawer.Screen name="WABusiness" component={WABusiness} 
         options={{
            drawerIcon:({color}) => (
        <FontA onPress={() => { }} name="b" size={responsiveWidth(6)} color={color}/>
     )
         }}



      />
    </Drawer.Navigator>
  );
}


export default DrawerStack