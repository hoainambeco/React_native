import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import add from './outline_add_circle_black_48dp.png';
import RNFetchBlob from 'rn-fetch-blob';

export default class ActionButton extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  toggleOpen = () => {
    if (this._open) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000,
      }).start();
    } else {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1000,
      }).start();
    }
    this._open = !this._open;
  };
  render() {
    const dowtload1080 = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -200],
    });

    const dowtload1080Style = {
      transform: [
        {
          translateY: dowtload1080,
        },
      ],
    };

    const dowtload281 = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -140],
    });

    const dowtload281Style = {
      transform: [
        {
          translateY: dowtload281,
        },
      ],
    };

    const dowtload576 = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -70],
    });
    const dowtload576Style = {
      transform: [
        {
          translateY: dowtload576,
        },
      ],
    };

    const checkPermission = async fileUrl => {
      // Function to check the platform
      // If Platform is Android then check for permissions.

      if (Platform.OS === 'ios') {
        downloadFile(fileUrl);
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message:
                'Application needs access to your storage to download File',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // Start downloading
            downloadFile(fileUrl);
            console.log('Storage Permission Granted.');
          } else {
            // If permission denied then show alert
            Alert.alert('Error', 'Storage Permission Not Granted');
          }
        } catch (err) {
          // To handle permission related exception
          console.log('++++' + err);
        }
      }
    };

    const downloadFile = fileUrl => {
      // Get today's date to add the time suffix in filename
      let date = new Date();
      // File URL which we want to download
      let FILE_URL = fileUrl;
      // Function to get extention of the file url
      let file_ext = getFileExtention(FILE_URL);

      file_ext = '.' + file_ext[0];

      // config: To get response by passing the downloading related options
      // fs: Root directory path to download
      const {config, fs} = RNFetchBlob;
      let RootDir = fs.dirs.PictureDir;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          path:
            RootDir +
            '/file_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            file_ext,
          description: 'downloading file...',
          notification: true,
          // useDownloadManager works with Android only
          useDownloadManager: true,
        },
      };
      config(options)
        .fetch('GET', FILE_URL)
        .then(res => {
          // Alert after successful downloading
          console.log('res -> ', JSON.stringify(res));
          alert('File Downloaded Successfully.');
        });
    };

    const getFileExtention = fileUrl => {
      // To get the file extension
      return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background]}>
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert('đang tải ảnh 574 * 1024');
              var url = this.props.data.url_l;
              checkPermission(url);
              console.log(this.props.data.url_l);
            }}>
            <Animated.View style={[styles.button, dowtload1080Style]}>
              <Text style={styles.test}>1920 * 1080</Text>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={add}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert('đang tải ảnh 574 * 1024');
              var url = this.props.data.url_c;
              checkPermission(url);
              console.log(this.props.data.url_c);
            }}>
            <Animated.View style={[styles.button, dowtload576Style]}>
              <Text style={styles.test}>574 * 1024</Text>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={add}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert('đang tải ảnh 334 * 500');
              var url = this.props.data.url_m;
              checkPermission(url);
              console.log(this.props.data.url_m);
            }}>
            <Animated.View style={[styles.button, dowtload281Style]}>
              <Text style={styles.test}>334 * 500</Text>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={add}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.toggleOpen()}>
            <Animated.View style={[styles.button]}>
              <Text style={styles.test}>DownLoad</Text>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={add}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    bottom: 20,
    left: 220,
    alignItems: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
  },
  button: {
    // backgroundColor: 'grey',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    alignSelf: 'center',
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 40,
    borderBottomColor: 12,
    width: 70,
    height: 70,
    flexDirection: 'row',
  },
  iconStyle: {
    width: 60,
    height: 60,
  },
  test: {
    width: 100,
    backgroundColor: 'black',
    color: '#FFF',
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
});
