import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {
  getDatabase,
  push,
  ref,
  remove,
  set,
  onValue,
  child,
  get,
  query,
  limitToLast,
  update,
} from 'firebase/database';
export default function AddScreen() {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [gia, setGia] = useState('');
  const firebaseConfig = {
    apiKey: 'AIzaSyCEvS_Mic1Bvo6vsVSKok54RmFO-5slmo4',
    authDomain: 'tesst-5050c.firebaseapp.com',
    databaseURL:
      'https://tesst-5050c-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'tesst-5050c',
    storageBucket: 'tesst-5050c.appspot.com',
    messagingSenderId: '474179593560',
    appId: '1:474179593560:web:ebd1072d73f8b331a4712d',
    measurementId: 'G-TC4FVQCBJX',
  };
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  });
  return (
    <View>
      <TextInput
        style={styles.TextInput}
        placeholder={'Nhập ID'}
        onChangeText={sID => {
          setID(sID);
          console.log(sID + '=============' + ID);
        }}
      />
      <TextInput
        style={styles.TextInput}
        placeholder={'Nhập Tên'}
        onChangeText={sname => {
          setName(sname);
          console.log(sname + '=============' + name);
        }}
      />
      <TextInput
        style={styles.TextInput}
        placeholder={'Nhập Giá'}
        onChangeText={sgia => {
          setGia(sgia);
          console.log(sgia + '=============' + gia);
        }}
      />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: 50,
          backgroundColor: '#00bfff',
          margin: 10,
          borderRadius: 50,
        }}
        onPress={() => {
          if (ID === '' || name === '' || gia === '') {
            alert('Vui lòng nhập đầy đủ thông tin');
          } else {
            const db = getDatabase();
            const reference = ref(db, 'oto/' + ID);
            set(reference, {
              name: name,
              gia: gia,
            });
            alert('Thêm Thành Công');
          }
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Thêm
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});
