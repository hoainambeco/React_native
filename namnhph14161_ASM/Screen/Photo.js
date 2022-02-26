import {Image, Text, View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import FloatButton from './FloatingButton';
export default function Photo({route}) {
  const {imageData} = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: imageData.url_z}}
        style={{width: 640, height: 480}}
      />
      <FloatButton data={imageData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
