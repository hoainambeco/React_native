import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import logo from '../assets/logo.png';
export default function SpashScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          textAlign: 'center',
        }}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Image
          source={logo}
          style={{width: 200, height: 100, resizeMode: 'stretch'}}
        />
        <Text>Quản lý Ô tô</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
