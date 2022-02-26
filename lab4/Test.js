import * as React from 'react';
import {Image, View, Text, Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/1007500/screenshots/3623450/cake_01.gif',
          }}
          style={{width: width, height: width * 1.2, resizeMode: 'cover'}}
        />
        <Text style={styles.text}>
          Chúc bạn sinh nhật vui vẻ, năm mới phát đạt, ra trường đúng thời hạn
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 300,
    fontSize: 30,
    textAlign: 'center',
    color: '#DF0029',
    fontFamily: 'Menlo',
    marginBottom: 10,
    padding: 'auto',
  },
});
