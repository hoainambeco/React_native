/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import splash from './screen/splash';
import Home from './screen/Home';
import aaa from './screen/aaa';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Màn Hình Chào"
          component={splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Màn hình chính'}}
        />
        <Stack.Screen
          name="aaa"
          component={aaa}
          options={{title: 'Màn hình aaa'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
