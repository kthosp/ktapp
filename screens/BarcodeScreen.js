import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BarCodeScanner, Permissions ,WebBrowser } from 'expo';

export default class extends React.Component {
  state = {
    hasCameraPermission: null,
  };

  componentDidMount() {
    this.permissionRequest();
  }

  permissionRequest = async () =>{
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 ,alignItems:'center',justifyContent:'center'}}>
        <View style={{ width: 150, height: 150 }}>
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
          />
        </View>
      </View>
    );
  }

  handleBarCodeScanned = async ({ type, data }) => {
    let result = await WebBrowser.openBrowserAsync(data);
  };
}
