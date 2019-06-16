import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';
import Constants from 'expo-constants';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import WebScreen from './screens/WebScreen';
import BarcodeScreen from './screens/BarcodeScreen';
//import RmScreen from './screens/RmScreen';

const stackScreen = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: <Ionicons name={'md-home'} color="white" size={32} />,
        tabBarLabel: 'หน้าหลัก',
      }),
    },
/*
    RmScreen:{
      screen : RmScreen,
      navigationOptions:({navigation})=>({
        tabBarIcon: <MaterialCommunityIcons name={'fire'} color="white" size={32}/>,
        tabBarLabel : 'RiskManagement'
      }),
    },
*/
    Web: {
      screen: WebScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: <Ionicons name={'md-globe'} color="white" size={32} />,
        tabBarLabel: 'เนื้อหา',
      }),
    },
    Barcode: {
      screen: BarcodeScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: <MaterialCommunityIcons name={'barcode-scan'} color="white" size={32} />,
        tabBarLabel: 'สแกน',
      }),
    },

  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'seagreen',
      },
    },
  }
);

const App = createAppContainer(stackScreen);
export default App;
