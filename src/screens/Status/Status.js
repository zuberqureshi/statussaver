import { FlatList, Image, StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import FontA from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import pr from '../../assets/d.jpeg'
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Status = () => {

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
        {
            name:'Danish',
            img:require('../../assets/d.jpeg')
        },
        {
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
        // console.log("flatlist item",)
    
        return (
          <>
          <View style={{width:WIDTH,height:HEIGHT*0.1,marginBottom:responsiveWidth(2),flexDirection:'row',gap:responsiveWidth(5),alignItems:'center',borderBottomWidth:responsiveWidth(0.3),borderColor:'#ccc',paddingHorizontal:responsiveWidth(2),}} >

            <Image source={img}  style={{width:responsiveWidth(16),height:responsiveHeight(8),resizeMode:'contain',borderRadius:responsiveWidth(10)}} />
            
            <View style={{gap:responsiveWidth(2)}} >
                <Text style={{color:'#b8b8b8'}} >26-07-2023</Text>
                <FontA onPress={() => { }} name="image" size={responsiveWidth(4)} color="#075e55" style={{  }} />

            </View>

            <View style={{gap:responsiveWidth(2),marginLeft:responsiveWidth(30)}}>
              <TouchableOpacity style={{borderWidth:responsiveWidth(0.4),borderColor:"#075e55",paddingHorizontal:responsiveWidth(3),paddingVertical:responsiveWidth(1)}} >
                <Text style={{color:'#075e55'}} >SAVE</Text>
              </TouchableOpacity>

              <View style={{flexDirection:'row',gap:responsiveWidth(2)}} >
                  <MCIcon onPress={() => { }} name="delete" size={responsiveWidth(6)} color="#075e55" style={{  }} />
                  <MCIcon onPress={() => { }} name="share-variant" size={responsiveWidth(6)} color="#075e55" style={{  }} />
              </View>
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
    <View style={styles.mainContainer} >
     
     <FlatList
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={Empty}
          showsVerticalScrollIndicator={false}
        />

    
    </View>
  )
}

export default Status

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        marginTop:responsiveWidth(2)

    },

})