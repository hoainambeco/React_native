/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Họ tên: Nguyễn Hoài Nam
 * Mã sinh viên: PH14161
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

var text =
  'Hello các bạn\n' +
  'Tôi là Nguyễn Hoài Nam\n' +
  'Hiện tại tôi đang học tại FPT Polytechnic\n' +
  'Mã sinh viên của tôi là PH14161\n';

export default function App() {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            flexDirection: 'column-reverse',
            width: 50,
            height: 50,
            backgroundColor: '#ea8e8e',
          }}>
          <Text
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            Hele
          </Text>
          <Text
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            Hello
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: 50,
            height: 50,
            backgroundColor: '#ea8e8e',
          }}>
          <Text
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            Hele
          </Text>
          <Text
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            Hello
          </Text>
        </View>
        <Text style={styles.text}> {text} </Text>
        <TouchableOpacity
          style={{opacity: 10}}
          onPress={() => {
            alert('hello');
          }}>
          <Image
            source={require('./img/aaaa.png')}
            style={styles.categoryImage}
          />
        </TouchableOpacity>

        <Button title="LOGIN" onPress={() => {}} />
        <TextInput
          style={{width: 100, hidden: 100, borderRadius: 10}}
          placeholder={'password'}
          secureTextEntry={true}
        />
        <StatusBar hidden={false} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 0,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#f19999',
  },
  categoryImage: {
    padding: 10,
    marginTop: 50,
    width: 400,
    height: 400,
    borderRadius: 20,
  },
});
