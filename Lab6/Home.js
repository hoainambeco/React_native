import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function Home({navigation}) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  return (
    <View style={{backgroundColor: 'gray', height: '100%', width: '100%'}}>
      <TextInput
        style={styles.Item}
        onChangeText={data => {
          setA(data);
        }}
        placeholder="Số A"
      />
      <TextInput
        style={styles.Item}
        onChangeText={data => {
          setB(data);
        }}
        placeholder="Số B"
      />
      <TextInput
        style={styles.Item}
        onChangeText={data => {
          setC(data);
        }}
        placeholder="Số C"
      />
      <Button
        title="Tính toán"
        style={styles.Button}
        onPress={() => {
          if (a.length == 0 || b.length == 0 || c.length == 0) {
            alert('bạn chưa nhập tham số A, B, C');
            return;
          }
          var nghiem = '';
          const delta = Math.pow(b, 2) - 4 * a * c;
          if (delta < 0) {
            nghiem = 'Phương trình vô nghiêm';
          } else if (delta == 0) {
            const kep = (-b / 2) * a * c;
            nghiem = `Phương trình có nghiệm kép x= ${kep}`;
          } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            nghiem = `Phương trình có 2 nghiệm phân biệt \nx1= ${x1} \nx2= ${x2}`;
          }
          navigation.navigate('Profile', {dulieu: nghiem});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Item: {
    borderRadius: 12,
    height: 52,
    width: '100%',
    borderWidth: 1,
    marginTop: 10,
    fontSize: 30,
    padding: 10,
  },
  Button: {
    backgroundColor: '#FFF',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
