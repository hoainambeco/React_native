import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
// import logo from '../assets/aaaa.png';
import logo from '../assets/logo.png';
export default function SplashScreen({navigation}) {
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
        <Image source={logo} style={{resizeMode: 'stretch'}} />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#222222',
        }}>
        Hệ thống quản lý ô tô
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
