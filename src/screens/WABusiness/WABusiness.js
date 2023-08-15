  import React, {useState} from 'react';
import { TouchableOpacity,View, Text, StyleSheet, Share } from 'react-native';

import AgoraUIKit from 'agora-rn-uikit';
const WABusIness = () => {

  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: 'c0dcab8fed8d49ff9de7ab077739ca3a',
    channel: 'test123',
    token:null
  };
  const rtcCallbacks = {
    EndCall: () => { console.log( 'end call ' );   },
  };


  return (
    <>
      <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
 
    </>
  )
}

export default WABusIness

const styles = StyleSheet.create({})