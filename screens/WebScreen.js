import React from 'react';
import { View, 
        Button, 
        Text, 
        Image, 
        WebView, 
        SafeAreaView ,
        StyleSheet } from 'react-native';
//import { Constants } from 'expo';
import Constants from 'expo-constants';

export default class extends React.Component {
  render() {
     const url = 'https://www.kthos.go.th/kt/';
    return (    
        <WebView
          source={{ 
              uri: url, 
          }}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        style={{ flex: 1 }} 
        />
     
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : 22.5,
  },
})
