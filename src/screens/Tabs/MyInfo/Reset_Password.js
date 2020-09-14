import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import scale from "../../../common/Scale";
import { Header } from "react-native-elements";
import { ScrollView } from "react-native";

export default function MyInfoMain(props) {
  const [error, setError] = useState(false);
  const [cur_pwd, set_cur_pwd] = useState("");
  const [new_pwd, set_new_pwd] = useState("");
  const [new_pwd_confirm, set_new_pwd_confirm] = useState("");

  return (
    <>
      <Header
        backgroundColor={"#459bfe"}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: "#459bfe" }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
        }}
        placement="left"
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{ marginLeft: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ width: scale(20), height: scale(20) }}
              source={require("../../../images/back_ic_80.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Text
            style={{
              fontSize: scale(16),
              color: "#ffffff",
              fontFamily: "Jalnan",
            }}
          >
            내 정보
          </Text>
        }
      />
      <SafeAreaView style={{ flex: 1, padding: scale(15) }}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={{ fontSize: scale(15), fontWeight: "bold" }}>
            비밀번호 재설정
          </Text>
          <Text
            style={{
              marginTop: scale(25),
              fontSize: scale(13),
              color: "#1d1d1d",
            }}
          >
            현재 비밀번호
          </Text>
          <View
            style={{
              position: "relative",
              marginTop: scale(9),
            }}
          >
            <TextInput
              style={
                error
                  ? {
                      borderColor: "#ff0000",
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingHorizontal: scale(15),
                      fontSize: scale(13),
                    }
                  : {
                      borderColor: "#707070",
                      borderWidth: 0.3,
                      borderRadius: 5,
                      paddingHorizontal: scale(15),
                      fontSize: scale(13),
                    }
              }
              placeholder={"비밀번호를 입력하세요. (영문, 숫자 포함)"}
              placeholderTextColor={"#bababa"}
              secureTextEntry={true}
              value={cur_pwd}
              onChangeText={(text) => set_cur_pwd(text)}
            />
            {error ? (
              <TouchableOpacity
                onPress={() => {
                  set_cur_pwd("");
                  setError(false);
                }}
                style={{
                  width: scale(20),
                  borderRadius: 100,
                  height: scale(20),
                  position: "absolute",
                  top: scale(13),
                  right: scale(10),
                  zIndex: 999,
                  backgroundColor: "#b9b9b9",
                }}
              />
            ) : null}
          </View>
          {error ? (
            <Text
              style={{
                fontSize: scale(10),
                color: "#ff0000",
                marginTop: scale(7),
              }}
            >
              비밀번호가 맞지 않습니다.
            </Text>
          ) : null}
          <Text
            style={{
              marginTop: scale(50),
              fontSize: scale(13),
              color: "#1d1d1d",
            }}
          >
            변경할 비밀번호
          </Text>
          <TextInput
            style={{
              marginTop: scale(9),
              borderColor: "#707070",
              borderWidth: 0.3,
              borderRadius: 5,
              paddingHorizontal: scale(15),
            }}
            placeholder={"비밀번호를 입력하세요. (영문, 숫자 포함)"}
            placeholderTextColor={"#bababa"}
            secureTextEntry={true}
            value={new_pwd}
            onChangeText={(text) => set_new_pwd(text)}
          />
          <TextInput
            style={{
              marginTop: scale(9),
              borderColor: "#707070",
              borderWidth: 0.3,
              borderRadius: 5,
              paddingHorizontal: scale(15),
            }}
            placeholder={"비밀번호를 확인하세요."}
            placeholderTextColor={"#bababa"}
            secureTextEntry={true}
            value={new_pwd_confirm}
            onChangeText={(text) => set_new_pwd_confirm(text)}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            setError(true);
          }}
          style={{
            backgroundColor: "#001740",
            padding: scale(12.5),
            justifyContent: "center",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "Jalnan", fontSize: 15, color: "#ffffff" }}
          >
            변경하기
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    width: scale(18),
    height: scale(18),
  },
  mainlogo: {
    width: scale(140),
    height: scale(22),
  },
  alert: {
    width: scale(18),
    height: scale(18),
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topimage: {
    width: scale(330),
    height: scale(130),
    borderRadius: 10,
    alignSelf: "center",
  },
  wrapper: {
    flex: 0.32,
    paddingTop: scale(20),
  },
  categorytitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(16),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  carlist: {
    width: scale(330),
    height: scale(250),
    backgroundColor: "#ffffff",
  },
  carimage: {
    width: scale(330),
    height: scale(182.5),
  },
  premark: {
    width: scale(59),
    height: scale(59),
  },
  like: {
    width: scale(24),
    height: scale(24),
  },
  avator: {
    width: scale(50),
    height: scale(50),
  },
  price: {
    fontFamily: "NotoSans-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  carname: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  carhistory: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: -0.3,
    textAlign: "left",
    color: "#999999",
  },
  daypeople: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#bebebe",
  },
  preicon: {
    width: scale(20),
    height: scale(20),
  },
  pretext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(10),
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "right",
    color: "#1d1d1d",
  },
  onofficon: {
    width: scale(9),
    height: scale(9),
  },
  real: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#459bfe",
  },
  realcar: {
    width: scale(157.5),
    height: scale(130),
  },
  smallcarname: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#459bfe",
  },
  review: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    lineHeight: 10,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
});
