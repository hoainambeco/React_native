import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

export default function App() {
  useEffect(() => {
    setData([
      {
        id: '1',
        title: 'First Item',
      },
      {
        id: '2',
        title: 'Second Item',
      },
      {
        id: '3',
        title: 'Third Item',
      },
      {
        id: '4',
        title: 'Third Item',
      },
      {
        id: '5',
        title: 'Third Item',
      },
      {
        id: '6',
        title: 'Third Item',
      },
      {
        id: '7',
        title: 'Third Item',
      },
      {
        id: '8',
        title: 'Third Item',
      },
      {
        id: '9',
        title: 'Third Item',
      },
    ]);
  }, []);
  const [item, setItem] = useState();
  const [DATA, setData] = useState();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '100%', borderWidth: 1, margin: 10}}>
        <TextInput
          style={{width: '100%', height: 40, borderWidth: 1, margin: 10}}
          onChangeText={item => {
            setItem(item);
          }}
        />
        <Button
          title="Add"
          onPress={() => {
            const newItem = {id: item, title: item};
            var array = DATA;
            array.push(newItem);
            setData(Array.from(array));
          }}
          style={{width: '100%', height: 40, borderWidth: 1, margin: 10}}
        />
        <Button
          title="Update"
          onPress={() => {
            // const newItem = {id: item, title: item};
            // var array = DATA;
            // array.push(newItem);
            // setData(Array.from(array));
            var myArray = DATA;
            for (let index = 0; index < myArray.length; index++) {
              const element = myArray[index];
              if (item == element.id) {
                var items = {id: item, title: item};
                myArray[index] = items;
              }
            }
            setData(Array.from(myArray));
          }}
          style={{width: '100%', height: 40, borderWidth: 1, margin: 10}}
        />
      </View>
      <FlatList
        numColumns={3}
        data={DATA}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                borderBottomColor: 'blue',
                borderWidth: 1,
                margin: 8,
              }}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Button
                title="Delete"
                onPress={() => {
                  const id = item.id;
                  const myArray = DATA;
                  for (let i = 0; i < myArray.length; i++) {
                    const element = myArray[i];
                    if (id == element.id) {
                      myArray.splice(i, 1);
                      break;
                    }
                  }
                  setData(Array.from(myArray));
                }}
              />
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                height: 100,
                borderBottomColor: 'blue',
                borderWidth: 1,
                margin: 8,
              }}>
              <Text>Header</Text>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                height: 100,
                borderBottomColor: 'blue',
                borderWidth: 1,
                margin: 8,
              }}>
              <Text>Footer</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
