/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Screen/test';
import {name as appName} from './app.json';
import {StackActions} from 'react-navigation';

AppRegistry.registerComponent(appName, () => App);
