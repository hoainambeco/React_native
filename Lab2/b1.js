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
          placeholder='Enter Your Username' />
      </View>

      <View style={{width: 323, height: 41, backgroundColor: '#000000', opacity: '60%', borderRadius: 20, color: '#fff', justifyContent: 'center', paddingLeft: 25, marginBottom: 10}}>
        <Image
          style={{width: 11, height: 11, marginTop: 14}}
          source={{uri: require('./assets/pass.png')}} />
        <TextInput
          style={{width: 223, height: 41, color: '#ffffff', marginTop: -26.5, marginLeft: 32, outline: 'none'}}
          placeholder='Enter Your Password'
          secureTextEntry='true' />
      </View>

      <View style={{width: 323, paddingLeft: 25}}>
        <Image
          style={{width: 11, height: 11, marginTop: 14}}
          source={{uri: require('./assets/check.png')}} />
        <Text style={{color: '#7f7987', marginTop: -15.5, marginLeft: 32}} onPress={()=>{alert(Remember)}}>Remember my password</Text>
      </View>

      <View style={{width: 323, paddingLeft: 25, marginBottom: 25}}>
        <Image
          style={{width: 11, height: 11, marginTop: 14}}
          source={{uri: require('./assets/magnet.png')}} />
        <Text style={{color: '#7f7987', marginTop: -15.5, marginLeft: 32}}  onPress={()=>{alert(Forget)}}>Forgot password?</Text>
      </View>

      <View style={{width: 323, height: 41, backgroundColor: '#1685c5', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 23}}>
        <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'bold'}}>Sign in</Text>
      </View>

      <View style={{width: 323, height: 41, backgroundColor: '#3a5795', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 23}}>
        <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'bold'}}>Sign in with facebook</Text>
      </View>

      <View style={{}}>
        <Text style={{color: '#4e5369'}}>Don't have an account, </Text>
        <Text style={{color: '#817b89', marginLeft: 145, marginTop: -19}}>Sign up</Text>
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
