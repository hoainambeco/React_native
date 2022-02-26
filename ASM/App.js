import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './screen/Home';
import SplashScreen from './screen/SplashScreen';
import Photo from './screen/Photo';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          style={{backgroundColor: '#000a12'}}
          name="Home"
          component={Home}
        />

        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
