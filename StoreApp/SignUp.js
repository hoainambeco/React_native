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
  TouchableHighlight,
  TouchableHighlightComponent,
} from 'react-native';

import Img from '../StoreApp/img/aaaa.png';
import {titlePlaceholder} from 'react-native/template.config';

export default function Test() {
  return (
    <View style={styles.view}>
      <View style={styles.herder}>
        <Image source={require('./img/Back.png')} style={styles.back} />
        <Text style={styles.Back}>Back</Text>
        <Image source={require('./img/HaiCham.png')} style={styles.menu} />
      </View>
      <View style={styles.logoHeader}>
        <Image source={require('./img/Logo.png')} style={styles.imageLogo} />
      </View>
      <View style={styles.ViewUserName}>
        <View style={styles.imgUser}>
          <Image source={require('./img/User.png')} style={styles.User} />
        </View>
        <TextInput
          style={styles.txtUserName}
          placeholder={'Enter Your Username'}
          onChangeText={''}
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.ViewEmail}>
        <View style={styles.imgEmail}>
          <Image source={require('./img/open_mail.png')} style={styles.Email} />
        </View>
        <TextInput
          style={styles.txtEmail}
          placeholder={'Enter Your E-mail'}
          onChangeText={''}
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.ViewPassWord}>
        <View style={styles.imgPass}>
          <Image source={require('./img/Padlock.png')} style={styles.Pass} />
        </View>
        <TextInput
          style={styles.txtPassWord}
          placeholder={'Enter Your Password'}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.ViewPassWord}>
        <View style={styles.imgPass}>
          <Image source={require('./img/lock_open.png')} style={styles.Pass} />
        </View>
        <TextInput
          style={styles.txtPassWord}
          placeholder={'Re-type Your Password'}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          placeholderTextColor={'gray'}
        />
      </View>
      <Text onPress={() => alert('Hello')} style={styles.Button}>
        Sign in
      </Text>
      <Text onPress={() => alert('Hello')} style={styles.ButtonFB}>
        Sign in with facebook
      </Text>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#1e2f47',
    width: '100%',
    height: '100%',
  },
  Back: {
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24,
    marginLeft: 15,
    textAlignVertical: 'center',
  },
  logoHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 48,
  },
  imageLogo: {
    width: '90%',
    height: null,
    aspectRatio: 650 / 300,
  },
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
  herder: {
    backgroundColor: '#1685c5',
    width: '100%',
    height: 60,
    flexDirection: 'row',
  },
  back: {
    width: 20,
    height: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  menu: {
    scaleX: 0.5,
    scaleY: 0.5,
    marginTop: 5,
    marginLeft: 300,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  ViewUserName: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderRadius: 50,
    backgroundColor: '#0b121c',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 60,
    color: 'gray',
  },
  ViewPassWord: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderRadius: 50,
    backgroundColor: '#0b121c',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    color: 'gray',
  },
  txtUserName: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'gray',
    fontSize: 15,
  },
  txtPassWord: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'gray',
    fontSize: 15,
  },
  imgUser: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  User: {
    width: 16,
    height: 16,
    textAlign: 'center',
  },
  imgPass: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  Pass: {
    width: 15,
    height: 22,
    textAlign: 'center',
  },
  ViewEmail: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderRadius: 50,
    backgroundColor: '#0b121c',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    color: 'gray',
  },
  txtEmail: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'gray',
    fontSize: 15,
  },
  imgEmail: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  Email: {
    width: 16,
    height: 16,
    textAlign: 'center',
  },
  Button: {
    width: '90%',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#1685c5',
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFF',
    fontSize: 20,
    flexDirection: 'column',
    textAlignVertical: 'center',
  },
  ButtonFB: {
    width: '90%',
    height: 40,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#3a5795',
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFF',
    fontSize: 20,
    flexDirection: 'column',
    textAlignVertical: 'center',
  },
});
