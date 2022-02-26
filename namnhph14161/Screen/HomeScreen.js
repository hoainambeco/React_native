import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('AddScreen');
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          ADD
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ListScreen');
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,

            fontWeight: 'bold',
          }}>
          List
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 50,
    backgroundColor: '#00bfff',
    margin: 10,
    borderRadius: 50,
  },
});
