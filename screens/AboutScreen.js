import React from 'react';

import { View, Button, Text, Image, WebView, SafeAreaView } from 'react-native';
import { Constants } from 'expo';

export default class extends React.Component {
  render() {
    return (
     
        <WebView
          style={{
            marginTop: Constants.statusBarHeight,
          }}
          source={{ uri: 'http://www.kthos.go.th/kt' }}
        />
     
    );
  }
}
