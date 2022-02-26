import React, {Component} from 'react';
import {Image, Text, View, Button, StyleSheet} from 'react-native';
import {SignIn} from './screenName';
import {createNavigator} from 'react-navigation';
import {createNavigationContainer} from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text
          onPress={() => {
            this.props.navigation(SignIn);
          }}>
          Click đê
        </Text>
      </View>
    );
  }
}
