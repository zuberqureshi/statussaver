import { StyleSheet, Text, View,Dimensions,TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions'
import LinearGradient from 'react-native-linear-gradient'
import FontA from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const CustomDrawer = (props) => {



  const [selectedId, setSelectedId] = useState(null);

  
  const bottomList = [
    
    { icon: 'share-social-outline', title: 'Tell a friend' },
    { icon: 'exit', title: 'Sign out' },

  ];

  
  const Item = ({ title, icon, onPress, backgroundColor, color, iconColor, }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor: backgroundColor,  }]}>
      {/* <Image 
        style={{height:responsiveHeight(4),width:responsiveWidth(8),borderRadius:responsiveWidth(8),marginLeft:responsiveWidth(2.4)}}
         source={icon}
          /> */}
      <Icon name={icon} size={responsiveWidth(6)} color={iconColor} style={{ marginLeft: responsiveWidth(1) }} />
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );




  const renderItem = ({ item }) => {


    const backgroundColor = item.title === selectedId ? '#e1ebea' : 'white';
    const color = item.title === selectedId ? '#075e55' : '#333';
    const iconColor = item.title === selectedId ? '#075e55' : '#333';
    // const elevation = item.title === selectedId ? responsiveWidth(1.5) : 0;

    return (<Item
      onPress={() => {
        setSelectedId(item.title)
        if( item.title==='Sign out' ) {  }  
        else if(item.title==='Tell a friend' ){ }
     
        
        
      }}
      title={item.title}
      icon={item.icon}
      backgroundColor={backgroundColor}
      color={color}
      iconColor={iconColor}
      // elevation={elevation}
    />);
  }

  return (
   <View style={{flex:1}} >


    
    <DrawerContentScrollView  {...props}
       contentContainerStyle={{borderBottomWidth:responsiveWidth(0.3),borderColor:'#ccc',height:HEIGHT*0.4}}

     >
<LinearGradient colors={[ "#008c7f","#055147"]}
      useAngle={true} angle={322} angleCenter={{ x: 0.6, y: 0.4 }}
      style={{ width: WIDTH, height: HEIGHT*0.2,marginTop:responsiveWidth(-1),flexDirection:'row',gap:responsiveWidth(18)
        }}>
     <View style={{marginTop:responsiveWidth(18),marginLeft:responsiveWidth(4),gap:responsiveWidth(2)}} >
         <FontA onPress={() => { }} name="user-circle-o" size={responsiveWidth(12)} color="#ffffff" style={{  }} />
         <Text style={{color:'#ffffff',fontSize:responsiveFontSize(1.9)}} >Login to rock!</Text>
     </View>

     <TouchableOpacity  style={{marginTop:responsiveWidth(14),}} >
      <Text style={{color:'#ffffff',fontSize:responsiveFontSize(2.1)}} >Login</Text>
     </TouchableOpacity>

     
    </LinearGradient>
     
     <View style={{flex:1,paddingTop:responsiveWidth(2.5),backgroundColor:'#ffffff'}} >
     <DrawerItemList {...props} />
     </View>


  


   </DrawerContentScrollView>
   <View style={{paddingHorizontal:responsiveWidth(3.5),marginBottom:responsiveWidth(5),borderTopWidth:responsiveWidth(0.3),borderColor:'#ccc',gap:responsiveWidth(1.5),paddingTop:responsiveWidth(3)}} >
    
 

    <FlatList
          data={bottomList}
          renderItem={renderItem}

        />


   </View>



   </View>



  )
}

export default CustomDrawer

const styles = StyleSheet.create({


  item: {
    // padding: responsiveWidth(4.8),
    paddingVertical:responsiveWidth(2.5),
    marginVertical: responsiveWidth(1.9),
 
    flexDirection:'row',
    borderRadius:responsiveWidth(2.5)
  },
  title: {
    fontSize: responsiveFontSize(2.1),
    marginLeft:responsiveWidth(4),
    fontWeight:'500'
  },

})