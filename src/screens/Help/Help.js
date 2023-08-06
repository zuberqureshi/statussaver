import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Help = () => {

  const Line = () =>{

   return (
    <Text style={{fontSize:responsiveFontSize(2.1),letterSpacing:responsiveWidth(1)}} >---------------------------------------</Text>
   )


    }

  return (
    <View style={styles.mainContainer} >
        
      <View style={{flex:0.75,elevation:responsiveWidth(0.4),
      marginTop:responsiveWidth(3),borderRadius:responsiveWidth(1.5),gap:responsiveWidth(1.5),paddingHorizontal:responsiveWidth(5)}} >
        <Text style={{color:'#075e55',fontSize:responsiveFontSize(2.1),marginLeft:responsiveWidth(4),marginTop:responsiveWidth(2),
        fontWeight:'500'}} >How to use ?</Text>
        
        <View style={{alignSelf:'center',gap:responsiveWidth(-1)}} >
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
          1. First you have to Watch Status from your

        </Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
          original Whatsapp messenger.
        </Text>
        <Line/>
        </View>

        <View style={{alignSelf:'center',gap:responsiveWidth(-1)}} >
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
          2. Then open this app, Status tab displays

        </Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
          that Photos, GIFs and Videos you watched.
        </Text>
        <Line/>
        </View>

        <View style={{alignSelf:'center',gap:responsiveWidth(-1)}} >
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
          3. If you want to save any status, then press 
        </Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
          Save button, it will save that status forever
        </Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
        within app, from where you can Share it,
        </Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
        delete it and many more.
        </Text>
        <Line/>
        </View>

        <View style={{alignSelf:'center',gap:responsiveWidth(-1)}} >
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
          4. You can play videos directly or view
        </Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >
          image by single tap on list item.
        </Text>


        <Line/>
        </View>

        <View style={{alignSelf:'center',gap:responsiveWidth(-1)}} >

        <View style={{flexDirection:'row'}} >
        <Text style={{fontSize:responsiveFontSize(2.1),fontWeight:'500'}} >Note: </Text>
        <View>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >If you want to save statuses of dual     </Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >(clone) WhatsApp then you have to</Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >create dual app (clone) of this app as</Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >well.</Text>

        <View style={{marginTop:responsiveWidth(3)}} >
        <Text style={{fontSize:responsiveFontSize(2.1)}} >For video statuses, you must watch</Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >entire video status otherwise it will</Text>
        <Text style={{fontSize:responsiveFontSize(2.1)}} >not show.</Text>
        </View>

        
        </View>

        </View>



      
        </View>

      </View>
      
        

    
    </View>
  )
}

export default Help

const styles = StyleSheet.create({

  mainContainer:{
    flex:1,
    backgroundColor:'f8f8f8',
    alignItems:'center'
    
    
  },



})