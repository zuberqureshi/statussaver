import { StyleSheet, Text, View,FlatList,Dimensions,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import FontA from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions';



const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Saved = () => {

   
  var data=[
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },{
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },{
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },
    {
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },{
        name:'Danish',
        img:require('../../assets/d.jpeg')
    },

  
]


const renderItem = (props) => {
    // console.log("props FLat",props.item)
     
    return (
      <Item
        name={props.item.name}

        img={props.item.img}

       
        onPress={() => { }}
      />
    );
  };

  const Item = ({img, onPress}) => {
    // console.log("flatlist item",img)

    return (
      <>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',}} >


        <View style={{width:WIDTH/2-responsiveWidth(0.2),height:HEIGHT*0.2,backgroundColor:"green",marginHorizontal:responsiveWidth(0.1),marginVertical:responsiveWidth(0.1)}} >

        
          <Image source={img}  style={{resizeMode:'stretch',width:'100%',height:'100%'}} /> 

       

       
        </View>

    
        </View>



      
      
      
      

      </>
    );
  };

  // when will devices not available around so this empty component show
  const Empty = () => {
    return (
      <View style={{flex: 1,}}>
       <Text>No data</Text>
      </View>
    );
  };

  





  return (
    <View style={{flex:1}} >

<FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          ListEmptyComponent={Empty}
          showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({})