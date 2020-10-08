import React, { useState, useEffect, useContext } from "react";
import { Header } from "react-native-elements";
import scale from "../../../common/Scale";
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
  Switch,
} from "react-native";
import AppServer from "../../../common/AppServer";
import InfoContext from "../../../context/InfoContext";

export default function Noti_Setting({ route, navigation }) {
  const { state, setUserState } = useContext(InfoContext);
  const [isEnabled, setIsEnabled] = useState(state.info.push_agree_yn);

  const _toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    console.log(!isEnabled);
    let data = await AppServer.CARDEALER_API_00011({
      push_agree_yn: !isEnabled,
    });
    console.log("_toggleSwitch", data);
    if (data.success_yn && data.msg === "success") {
      setUserState({ ...state.info, push_agree_yn: !isEnabled });
    }
  };

  return (
    <>
      <Header
        placement="left"
        backgroundColor={"#459bfe"}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: "#459bfe" }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
        }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ marginLeft: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.back }}
              source={require("../../../images/back_ic_80.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={<Text style={{ ...styles.title }}>알림 설정</Text>}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ ...styles.container }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
            }}
            keyboardShouldPersistTaps="always"
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                paddingBottom: scale(30),
                paddingTop: scale(15),
                paddingHorizontal: scale(15),
                borderBottomColor: "rgba(0, 0, 0, 0.1)",
                borderBottomWidth: 0.7,
              }}
            >
              <Text style={{ ...styles.subtitle }}>매물알림 설정</Text>
              <View
                style={{
                  marginTop: scale(18.8),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ ...styles.subsubtitle }}>
                  앱의 매물 알림을 사용합니다.
                </Text>
                <Switch
                  trackColor={{ false: "#d4d4d4", true: "#459bfe" }}
                  thumbColor={isEnabled ? "#ffffff" : "#a5a5a5"}
                  ios_backgroundColor="#d4d4d4"
                  onValueChange={_toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  back: {
    width: scale(20),
    height: scale(20),
  },
  title: {
    fontFamily: "Jalnan",
    fontSize: scale(16),
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  subtitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(16),
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "left",
    color: "#222222",
  },
  subsubtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    textAlign: "left",
    color: "#1d1d1d",
  },
});
