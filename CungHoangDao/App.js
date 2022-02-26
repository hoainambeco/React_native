/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  var chomSao = '';
  var day = '';
  const [sdata, setData] = useState([]);
  return (
    <View
      style={{
        backgroundColor: '#36454F',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        padding: 10,
      }}>
      <TextInput
        placeholder="Chòm sao"
        placeholderTextColor={'#D3D3D3'}
        style={styles.textInput}
        onChangeText={title => {
          chomSao = title;
        }}
      />
      <TextInput
        placeholder="ngày"
        placeholderTextColor={'#D3D3D3'}
        style={styles.textInput}
        onChangeText={title => {
          day = title;
        }}
      />
      <TouchableOpacity
        onPress={() => {
          request();
        }}
        style={styles.button}>
        <Text style={{fontSize: 30}}>SUBMIT</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <Text style={styles.text}>Phạm vi: {sdata.date_range}</Text>
        <Text style={styles.text}>Ngày hiện tại: {sdata.current_date}</Text>
        <Text style={styles.text}>Miêu tả: {sdata.description}</Text>
        <Text style={styles.text}>Khả năng: {sdata.compatibility}</Text>
        <Text style={styles.text}>Tâm trạng: {sdata.mood}</Text>
        <Text style={styles.text}>Màu sắc: {sdata.color}</Text>
        <Text style={styles.text}>Số may mắn: {sdata.lucky_number}</Text>
        <Text style={styles.text}>Giờ may mắn: {sdata.lucky_time}</Text>
      </View>
    </View>
  );
  function request() {
    var url =
      'https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=' +
      chomSao +
      '&day=' +
      day;
    fetch(url, {
      method: 'POST',
      headers: {
        'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'x-rapidapi-key': '020b031e31msh7a99e4aae56624ep1ea604jsnc6a0af41d4de',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(
          'POST Response',
          'Response Body -> ' + JSON.stringify(json),
        );
        translate(json);
      })
      .catch(error => {
        console.error(error);
      })
      .done();
  }
  function translate(text) {
    var uri =
      'https://google-translate20.p.rapidapi.com/translate?text=' +
      text.description +
      '&tl=vi&sl=en';
    fetch(uri, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-translate20.p.rapidapi.com',
        'x-rapidapi-key': '020b031e31msh7a99e4aae56624ep1ea604jsnc6a0af41d4de',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(
          'POST Response',
          'Response Body -> ' + JSON.stringify(json),
        );
        var Item = {
          color: text.color,
          compatibility: text.compatibility,
          date_range: text.date_range,
          current_date: text.current_date,
          lucky_number: text.lucky_number,
          lucky_time: text.lucky_time,
          mood: text.mood,
          description: json.data.translation,
        };
        setData(Item);
        console.log(json.data);
      })
      .catch(error => {
        console.error(error);
      })
      .done();
  }
}
const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  textInput: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    color: '#D3D3D3',
    padding: 10,
  },
  button1: {
    width: '48%',
    height: 40,
    marginBottom: 10,
    color: '#D3D3D3',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {margin: 2, color: '#FFF'},
});
