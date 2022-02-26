import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Profile from './Profile';
import React, {useState} from 'react';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Màn Hình Nhập'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Hiện Thị Kết Quả'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
