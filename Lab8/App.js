/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
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
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

export default function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCzQsLAePSFGauLCHnf0iHWRjI6_9o4am8',
    authDomain: 'lab8-2b021.firebaseapp.com',
    databaseURL:
      'https://lab8-2b021-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'lab8-2b021',
    storageBucket: 'lab8-2b021.appspot.com',
    messagingSenderId: '536193326984',
    appId: '1:536193326984:web:781fafcbe201e3a160a43d',
    measurementId: 'G-GX7170V3EV',
  };
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  });
  const [data, setData] = useState([]);
  const [studentID, setStudentID] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [address, setAddress] = useState('');
  const ListHeaderComponent = () => {
    return (
      <View>
        <TextInput
          style={styles.TextInput}
          placeholder={'Nhập ID'}
          defaultValue={studentID}
          onChangeText={(ID = studentID) => {
            setStudentID(ID);
            console.log(ID + '=============' + studentID);
          }}
        />
        <TextInput
          style={styles.TextInput}
          defaultValue={numberPhone}
          placeholder={'Nhập numberPhone'}
          onChangeText={Phone => {
            setNumberPhone(Phone);
            console.log(Phone + '=============' + numberPhone);
          }}
        />
        <TextInput
          style={styles.TextInput}
          defaultValue={address}
          placeholder={'Nhập address'}
          onChangeText={add => {
            setAddress(add);
            console.log(add + '=============' + address);
          }}
        />
        <Button
          title="Thêm"
          onPress={() => {
            const db = getDatabase();
            const reference = ref(db, 'students/' + studentID);
            set(reference, {
              numberPhone: numberPhone,
              address: address,
            });
          }}
        />
        <Text>===================================================</Text>
        <Button
          title="Sửa"
          onPress={() => {
            const db = getDatabase();
            const reference = ref(db, 'students/' + studentID);
            update(reference, {
              numberPhone: numberPhone,
              address: address,
            });
            console.log(studentID + '===' + numberPhone + '===' + address);
          }}
        />
        <Text>===================================================</Text>
        <Button
          title="Xóa"
          onPress={() => {
            const db = getDatabase();
            const reference = ref(db, 'students/' + studentID);
            remove(reference);
          }}
        />
        <Text>===================================================</Text>
        <Button
          title="Hiện tất cả"
          onPress={() => {
            // Get a database reference to our posts
            const db = getDatabase();
            const starCountRef = ref(db, 'students/');
            try {
              onValue(starCountRef, snapshot => {
                // tao 1 array rỗng
                var duLieu = new Array();
                // đọc từng phần trong data lấy được
                snapshot.forEach(function (childSnapshot) {
                  var childKey = childSnapshot.key; // id của student
                  var childData = childSnapshot.val(); // giá trị của student
                  // tạo thành phần sinh viên và bỏ dữ  liệu vào
                  console.log(childData);
                  console.log(childKey);
                  var student = {id: undefined, info: undefined};
                  student.id = childKey;
                  student.info = childData;
                  // cho student vào mảng rỗng phía ngoài
                  duLieu.push(student);
                });
                // cập nhật data vào state
                setData(duLieu);
              });
            } catch (error) {
              alert(error);
            }
          }}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={({item}) => {
          return (
            <View style={styles.Item}>
              <TouchableOpacity
                onPress={() => {
                  setStudentID(item.id);
                  setNumberPhone(item.info.numberPhone);
                  setAddress(item.info.address);
                  console.log(studentID);
                }}>
                <Text>{item.id}</Text>
                <Text>{item.info.numberPhone}</Text>
                <Text>{item.info.address}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Item: {
    width: '95%',
    borderRadius: 10,
    margin: 8,
    padding: 4,
    borderColor: 'red',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  TextInput: {backgroundColor: 'gray', marginBottom: 10},
});
