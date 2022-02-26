import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Profile({route}) {
  const {dulieu} = route.params;
  return (
    <View
      style={{
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Text>Kết quả : {dulieu}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
