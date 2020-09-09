import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Header } from "react-native-elements";
import scale from "../../common/Scale";

const Width = Dimensions.get("window").width;

const Height = Dimensions.get("window").height;

// 
import {AccessToken, GraphRequest, GraphRequestManager, LoginManager} from 'react-native-fbsdk';
// 

export default function MainScreen() {


  const _responseInfoCallback = async (error, result) => {
    //페북전용
    if (error) {
      console.log('Error fetching data 1 : ' + JSON.stringify(error));
    } else {
      console.log('Result : ' + JSON.stringify(result));
      console.log('Result Name: ' + result.name || '');
      const names = (result.name || '').split(' ');
      let firstName = names[1];
      let lastName = names[0];
      console.log('firstName : ' + firstName);
      console.log('lastName : ' + lastName);
      if (result.name || ('' === lastName && !firstName)) {
        firstName = result.last_name;
        lastName = result.first_name;
      }
      const email = result.email;
      const user_img_url = result.picture.data.url ?? '';
    }
  };

  const FaceBook = async () => {
    let result;
    try {
      LoginManager.setLoginBehavior('NATIVE_ONLY');
      result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    } catch (error) {
      LoginManager.setLoginBehavior('WEB_ONLY');
      result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    }
    console.log('@@@@@@@@@@@@@@@@@ result : ' + JSON.stringify(result));
    if (result.isCancelled) {
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        // console.log(data.accessToken.toString())
        const infoRequest = new GraphRequest(
          '/me?fields=name,picture,email,last_name,first_name',
          null,
          _responseInfoCallback
        );
        new GraphRequestManager().addRequest(infoRequest).start();
      });
    }
  }

  return (
    <>
      <Header
        backgroundColor={"#459bfe"}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: "#459bfe" }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(0),
        }}
      />
      <SafeAreaView
        style={{
          ...styles.container,
          justifyContent: "center",
        }}
      >
        <View style={{ paddingHorizontal: scale(25) }}>
          <Image
            style={{
              ...styles.logo,
              marginBottom: scale(119.8),
              alignSelf: "center",
            }}
            source={require("../../images/logo_600.png")}
          />
          <TouchableOpacity
            style={{
              ...styles.button,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#001740",
            }}
            delayPressIn={0}
          >
            <Text
              style={{
                ...styles.buttontext,
                color: "#ffffff",
              }}
            >
              회원가입
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              marginTop: scale(15),
            }}
            delayPressIn={0}
          >
            <Text style={{ ...styles.buttontext, color: "#001740" }}>
              로그인
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: scale(23),
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.bottomicon }}
                source={require("../../images/kakaotalk_ic_72.png")}
              />
              <Text style={{ ...styles.bottomtext, marginLeft: scale(5) }}>
                kakao
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.bottomicon }}
                source={require("../../images/instagram_ic_72.png")}
              />
              <Text style={{ ...styles.bottomtext, marginLeft: scale(5) }}>
                Instagram
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              delayPressIn={0}
              onPress={() => {
                FaceBook()
              }}
            >
              <Image
                style={{ ...styles.bottomicon }}
                source={require("../../images/facebook_ic_72.png")}
              />
              <Text style={{ ...styles.bottomtext, marginLeft: scale(5) }}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.bottomicon }}
                source={require("../../images/Left_Black_Logo.png")}
              />
              <Text style={{ ...styles.bottomtext, marginLeft: scale(5) }}>
                Apple
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#459bfe",
  },
  logo: {
    width: scale(150),
    height: scale(150),
  },
  button: {
    width: scale(310),
    height: scale(50),
    borderRadius: 10,
  },
  buttontext: {
    fontFamily: "Jalnan",
    fontSize: scale(16),
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "center",
  },
  bottomicon: {
    width: scale(18),
    height: scale(18),
  },
  bottomtext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(12.3),
    fontStyle: "normal",
    lineHeight: scale(14.8),
    letterSpacing: 0.12,
    textAlign: "left",
    color: "#ffffff",
  },
});
