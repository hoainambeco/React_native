import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

export default function aaa({navigation, route}) {
  const {dulieu} = route.params;
  return (
    <View>
      <FlatList
        data={dulieu}
        renderItem={({item}) => {
          return (
            <View style={styles.Item}>
              <Text>{item.latitude}</Text>
              <Text>{item.longitude}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 100,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  Item: {
    width: '95%',
    borderRadius: 10,
    margin: 8,
    padding: 10,
    borderColor: 'red',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
