import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  useEffect(() => {
    setData([
      {
        id: '1',
        title: 'đi chơi',
      },
      {
        id: '2',
        title: 'Đi học',
      },
      {
        id: '3',
        title: 'Đi làm',
      },
      {
        id: '4',
        title: 'Phó đà',
      },
      {
        id: '5',
        title: 'Nhậu',
      },
      {
        id: '6',
        title: 'Tiêm vaccin',
      },
      {
        id: '7',
        title: 'thăm vợ bé',
      },
      {
        id: '8',
        title: 'shopping cùng bồ',
      },
      {
        id: '9',
        title: 'hẹn hò với em gái mưa',
      },
      {
        id: '10',
        title: 'Nghỉ mát',
      },
    ]);
  }, []);

  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [DATA, setData] = useState();
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          width: '100%',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="ID"
          style={{width: '90%', height: 40, borderWidth: 1, margin: 10}}
          onChangeText={id => {
            setId(id);
          }}
        />
        <TextInput
          placeholder="Title"
          style={{width: '90%', height: 40, borderWidth: 1, margin: 10}}
          onChangeText={title => {
            setTitle(title);
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            if (id == undefined || title == undefined) {
              alert('Bạn chưa nhập id và title');
            } else {
              // var myArray = DATA;
              // for (let index = 0; index < myArray.length; index++) {
              //   const element = myArray[index];
              //   if (id == element.id) {
              //     Sua();
              //     break;
              //   }
              // }
              them();
            }
          }}
          style={styles.Button}>
          <Text>Thêm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (id == undefined || title == undefined) {
              alert('Bạn chưa nhập id và title');
            } else {
              Sua();
            }
          }}
          style={styles.Button}>
          <Text>Sửa</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <View
              style={{
                margin: 8,
                flexDirection: 'row',
              }}>
              <Text style={{width: '10%'}}>{item.id}.</Text>
              <Text style={{width: '85%'}}>{item.title}</Text>
              <Button
                title="X"
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
        keyExtractor={item => item.id}
      />
    </View>
  );

  function them() {
    const newItem = {id: id, title: title};
    var array = DATA;
    array.push(newItem);
    setData(Array.from(array));
  }

  function Sua() {
    var myArray = DATA;
    for (let index = 0; index < myArray.length; index++) {
      const element = myArray[index];
      if (id == element.id) {
        var items = {id: id, title: title};
        myArray[index] = items;
      }
    }
    setData(Array.from(myArray));
  }
}

const styles = StyleSheet.create({
  Button: {
    width: 200,
    margin: 10,
    height: 50,
    fontSize: 20,
    marginLeft: 15,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#989797',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
