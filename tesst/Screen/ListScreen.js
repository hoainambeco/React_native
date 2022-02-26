import {StyleSheet, Text, View, FlatList} from 'react-native';
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
export default function ListScreen() {
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
  const [data, setData] = useState([]);
  const getData = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'oto/');
    try {
      onValue(starCountRef, snapshot => {
        var duLieu = new Array();
        snapshot.forEach(function (childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log('childData' + childData);
          console.log(childKey);
          var Oto = {id: undefined, name: undefined, gia: undefined};
          Oto.id = childKey;
          Oto.name = childData.name;
          Oto.gia = childData.gia;
          duLieu.push(Oto);
        });
        setData(duLieu);
      });
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  });
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.Item}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.gia}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
