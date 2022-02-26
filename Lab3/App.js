/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Họ Tên: Nnguyễn Hoài Nam
 * Mã sinh viên: PH14161
 */
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

export default function app() {
  const [Text1, setText1] = useState('');
  const [Text3, setText3] = useState('');

  function analysisTextScreen(text) {
    for (var i = 0; i < text.length; i++) {
      if (text.indexOf('×') > 0) {
        text = text.replace('×', '*');
      }
      if (text.indexOf('÷') > 0) {
        text = text.replace('÷', '/');
      }
      if (text.indexOf('%') > 0) {
        text = text.replace('%', '/100');
      }
    }
    // eslint-disable-next-line no-eval
    return eval(text);
  }
  return (
    <View style={styles.Screen}>
      <View style={styles.calculator}>
        <TextInput
          style={styles.textInput1}
          editable={false}
          selectTextOnFocus={false}
          value={Text1}
          defaultValue={Text1}
        />
        <TextInput
          style={styles.textInput1}
          editable={false}
          selectTextOnFocus={false}
          value={Text3 + ''}
          defaultValue={Text3 + ''}
          onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
        />
      </View>
      <View style={{marginTop: 30}}>
        <View>
          <View style={styles.cat}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '(');
              }}>
              <Text style={styles.Button}>(</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + ')');
              }}>
              <Text style={styles.Button}>)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '%');
              }}>
              <Text style={styles.Button}>%</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1('');
              }}>
              <Text style={styles.Button}>AC</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cat}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '7');
              }}>
              <Text style={styles.Button}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '8');
              }}>
              <Text style={styles.Button}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '9');
              }}>
              <Text style={styles.Button}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '÷');
              }}>
              <Text style={styles.Button}>÷</Text>
              {/*alt + 246*/}
            </TouchableOpacity>
          </View>
          <View style={styles.cat}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '4');
              }}>
              <Text style={styles.Button}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '5');
              }}>
              <Text style={styles.Button}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '6');
              }}>
              <Text style={styles.Button}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '×');
              }}>
              <Text style={styles.Button}>×</Text>
              {/*alt + 0215*/}
            </TouchableOpacity>
          </View>
          <View style={styles.cat}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '1');
              }}>
              <Text style={styles.Button}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '2');
              }}>
              <Text style={styles.Button}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '3');
              }}>
              <Text style={styles.Button}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '-');
              }}>
              <Text style={styles.Button}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cat}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '0');
              }}>
              <Text style={styles.Button}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '.');
              }}>
              <Text style={styles.Button}>.</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                try {
                  var KetQua = parseFloat(analysisTextScreen(Text1));
                } catch (error) {
                  var KetQua = 'Lỗi phép tính';
                }
                setText3(KetQua);
                alert(KetQua);
              }}>
              <Text style={styles.Button}>=</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setText1(Text1 + '+');
              }}>
              <Text style={styles.Button}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#5e5c5c',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  textInput1: {
    textAlign: 'right',
    width: 400,
    height: 100,
    marginRight: 30,
    marginLeft: 30,
    fontSize: 50,
  },
  textInput2: {
    textAlign: 'right',
    width: 400,
    height: 100,
    marginRight: 30,
    marginLeft: 30,
    fontSize: 30,
  },
  calculator: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },
  Button: {
    fontSize: 20,
    textAlign: 'center',
  },
  cat: {
    flexDirection: 'row',
    width: '100%',
  },
  touchableOpacity: {
    width: '20%',
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
