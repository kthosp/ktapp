import React from 'react';

import { View, Button, Text, Image } from 'react-native';
import { Constants } from 'expo';

export default class extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: Constants.statusBarHeight,
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          โรงพยาบาลคลองท่อม จ.กระบี่
        </Text>
        <Image
          style={{ width: 128, height: 128 }}
          source={/**{
            uri:
              'http://pher.moph.go.th/wordpress/wp-content/uploads/2017/04/logo-MOPH-1.png',                    
          }**/
          require('../assets/logoklongthom.png')
          }
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ยินดีต้อนรับ</Text>
      </View>
    );
  }
}
