import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import Lottie from 'lottie-react-native';
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions'
import * as Progress from 'react-native-progress';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const FONT = Dimensions.get('window').fontScale

const Splash = () => {

const [fill, setFill] = useState(0)
const [icon, seticon] = useState(false)
const [ShowText, setShowText] = useState(false)

  useEffect(() => {
    if(fill!=1){
   setTimeout(() => {
         setFill(fill+0.20)
    }, 200);
    }
  
    return () => {
   
      // console.log("time Clear",fill)
    }


  }, [fill])

  useEffect(() => {
    
    setTimeout(() => {
        seticon(true)
    }, 1000);

    setTimeout(() => {
        setShowText(true)
    }, 1300);



    
  
  
  }, [])
  
  


  return (
    <View style={{flex:1,backgroundColor:'#faf9fa'}} >
  
      <Progress.Bar progress={fill} width={WIDTH} height={HEIGHT*0.003} color='#075e55' style={{marginTop:responsiveWidth(1)}} />

      
         <View style={{flex:0.95,alignItems:'center',justifyContent:'center'}} >

      { icon &&   <Image source={require('../../assets/logo.png')} style={{width:responsiveWidth(40),height:responsiveHeight(15),resizeMode:'contain'}} />}
          
        {  ShowText &&
          <>  
          <Text style={{color:'#000',fontSize:FONT*21}} >Status & Story</Text>
          <Text style={{fontSize:FONT*19}}>Save</Text>
          </>
          }
         
         </View>


    
    
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})