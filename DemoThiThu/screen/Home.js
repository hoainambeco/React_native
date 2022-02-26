import React, {useState, useEffect} from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
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
export default function Home({navigation}) {
  const [data, setData] = useState([]);
  const firebaseConfig = {
    apiKey: 'AIzaSyDatut4VAIzJMrCC9UUSEXtRJkoRHNiyvc',
    authDomain: 'fir-5dd51.firebaseapp.com',
    databaseURL:
      'https://fir-5dd51-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'fir-5dd51',
    storageBucket: 'fir-5dd51.appspot.com',
    messagingSenderId: '1053980079526',
    appId: '1:1053980079526:web:75a5d2b4ad8ed7f7b6cb67',
    measurementId: 'G-SFHW6VJ82K',
  };
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  });
  const componentDidMount = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    return;
  };
  useEffect(() => {
    componentDidMount();
  });
  let latitude = '';
  let longitude = '';
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text);
    latitude = JSON.stringify(location.coords.latitude);
    longitude = JSON.stringify(location.coords.longitude);
  }
  text = `${latitude}:${longitude}`;
  const getData = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'location/');
    try {
      onValue(starCountRef, snapshot => {
        var duLieu = new Array();
        snapshot.forEach(function (childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log(childData);
          console.log(childKey);
          var student = {latitude: undefined, longitude: undefined};
          student.latitude = childData.latitude;
          student.longitude = childData.longitude;
          duLieu.push(student);
        });
        setData(duLieu);
      });
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
        <TouchableOpacity
          onPress={() => {
            componentDidMount();
            const db = getDatabase();
            const reference = ref(db, 'location/');
            push(reference, {
              latitude: latitude,
              longitude: longitude,
            });
            console.log('ok');
          }}>
          <Text>Cập nhật</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('aaa', {dulieu: data});
          }}>
          <Text>Load Data</Text>
        </TouchableOpacity>
      </View>
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
