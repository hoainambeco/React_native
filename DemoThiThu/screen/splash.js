import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/logo.png";
export default function splash({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={logo} />
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate("Home")}>Demo</Text>
      </View>
    </SafeAreaView>
  );
}
