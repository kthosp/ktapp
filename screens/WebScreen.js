import React from 'react';

import { View, Button, Text, Image, WebView, SafeAreaView } from 'react-native';
//import { Constants } from 'expo';

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
     
    );
  }
}
