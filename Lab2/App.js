import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
     <Image
        style={{width: 240, height: 112, marginBottom: 53}}
        source={{uri: require('./assets/logo.png')}} />

      <View style={{width: 323, height: 41, backgroundColor: '#000000', opacity: '60%', borderRadius: 20, color: '#fff', justifyContent: 'center', paddingLeft: 25, marginBottom: 22}}>
        <Image
          style={{width: 11, height: 11, marginTop: 14}}
          source={{uri: require('./assets/user.png')}} />
        <TextInput
          style={{width: 223, height: 41, color: '#ffffff', marginTop: -26.5, marginLeft: 32, outline: 'none'}}
          placeholder='Enter Your Name' />
      </View>

      <View style={{width: 323, height: 41, backgroundColor: '#000000', opacity: '60%', borderRadius: 20, color: '#fff', justifyContent: 'center', paddingLeft: 25, marginBottom: 22}}>
        <Image
          style={{width: 11, height: 11, marginTop: 14}}
          source={{uri: require('./assets/mail.png')}} />
        <TextInput
          style={{width: 223, height: 41, color: '#ffffff', marginTop: -26.5, marginLeft: 32, outline: 'none'}}
          placeholder='Enter Your Email' />
      </View>

      <View style={{width: 323, height: 41, backgroundColor: '#000000', opacity: '60%', borderRadius: 20, color: '#fff', justifyContent: 'center', paddingLeft: 25, marginBottom: 22}}>
        <Image
          style={{width: 11, height: 11, marginTop: 14}}
          source={{uri: require('./assets/pass.png')}} />
        <TextInput
          style={{width: 223, height: 41, color: '#ffffff', marginTop: -26.5, marginLeft: 32, outline: 'none'}}
          placeholder='Enter Your Password'
          secureTextEntry='true' />
      </View>

      <View style={{width: 323, height: 41, backgroundColor: '#000000', opacity: '60%', borderRadius: 20, color: '#fff', justifyContent: 'center', paddingLeft: 25, marginBottom: 22}}>
        <Image
          style={{width: 11, height: 11, marginTop: 14}}
          source={{uri: require('./assets/open.png')}} />
        <TextInput
          style={{width: 223, height: 41, color: '#ffffff', marginTop: -26.5, marginLeft: 32, outline: 'none'}}
          placeholder='Re - type Your Password'
          secureTextEntry='true' />
      </View>

      <View style={{width: 323, height: 41, backgroundColor: '#1685c5', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 23}}>
        <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'bold'}}>Sign up</Text>
      </View>

      <View style={{width: 323, height: 41, backgroundColor: '#3a5795', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 23}}>
        <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'bold'}}>Sign up with facebook</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c2d46',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
