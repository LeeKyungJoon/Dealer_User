import React from "react";
import { Header } from "react-native-elements";
import scale from "../../common/Scale";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function MainScreen() {
  return (
    <>
      <Header
        backgroundColor={"#459bfe"}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: "#459bfe" }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(78),
        }}
        leftComponent={
          <TouchableOpacity
            style={{ marginLeft: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image source={require("../../images/search_ic_72.png")} />
          </TouchableOpacity>
        }
        centerComponent={<Image source={require("../../images/logo.png")} />}
        rightComponent={
          <TouchableOpacity
            style={{ marginRight: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image source={require("../../images/alert_ic_72.png")} />
          </TouchableOpacity>
        }
      />
    </>
  );
}
