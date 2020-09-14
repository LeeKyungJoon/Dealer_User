import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import scale from "../../../common/Scale";
import { Header } from "react-native-elements";
import Modal from "react-native-modal";

export default function MyInfoMain(props) {
  const [logoutModal, setLogoutModal] = useState(false);
  const [profiletModal, setProfileModal] = useState(false);

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
        // leftComponent={
        //   <TouchableOpacity
        //     style={{ marginLeft: scale(5) }}
        //     delayPressIn={0}
        //     hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
        //   >
        //     <Image
        //       style={{ ...styles.back }}
        //       source={require("../../../images/back_ic_80.png")}
        //     />
        //   </TouchableOpacity>
        // }
        centerComponent={
          <Image
            style={{ ...styles.mainlogo }}
            source={require("../../../images/logo.png")}
          />
        }
      />
      <View style={{ flex: 1, backgroundColor: "#000000" }}>
        <View style={{ ...styles.view, paddingTop: scale(15) }}>
          <Text
            style={{
              fontSize: scale(15),
              color: "#1d1d1d",
              marginBottom: scale(15),
            }}
          >
            내 정보
          </Text>
          <View style={{ alignItems: "center" }}>
            {/* <Image source={require('')}/> */}
            <View
              style={{
                width: scale(90),
                position: "relative",
                height: scale(90),
                borderRadius: 10,
                backgroundColor: "#001740",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setProfileModal(true);
                }}
                style={{
                  position: "absolute",
                  width: scale(30),
                  height: scale(30),
                  borderRadius: 100,
                  backgroundColor: "#b2b2b2",
                  right: -scale(15),
                  bottom: 0,
                }}
              />
            </View>
          </View>
          <Text
            style={{
              marginTop: scale(15),
              fontSize: scale(15),
              color: "#1d1d1d",
              textAlign: "center",
            }}
          >
            홍길동
          </Text>
          <Text
            style={{
              marginTop: scale(5),
              marginBottom: scale(15),
              fontSize: scale(13),
              color: "#bfbfbf",
              textAlign: "center",
            }}
          >
            dealer_app@gmail.com
          </Text>
          <View style={{ ...styles.boundary }} />
        </View>
        <View style={{ ...styles.view }}>
          <Text style={{ ...styles.title_txt }}>내 정보</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Reset_Password");
            }}
            style={{ ...styles.row_view }}
          >
            <Text style={{ ...styles.desc_txt }}>비밀번호 재설정</Text>
            <Image
              source={require("../../../images/in_ic_68.png")}
              style={{ ...styles.iconStyle1 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Reset_Phone");
            }}
            style={{ ...styles.row_view }}
          >
            <Text style={{ ...styles.desc_txt }}>휴대전화 번호 재설정</Text>
            <Image
              source={require("../../../images/in_ic_68.png")}
              style={{ ...styles.iconStyle1 }}
            />
          </TouchableOpacity>
          <View style={{ ...styles.boundary, marginTop: scale(7.5) }} />
        </View>
        <View style={{ ...styles.view }}>
          <Text style={{ ...styles.title_txt }}>알림 설정</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Noti_Setting");
            }}
            style={{ ...styles.row_view }}
          >
            <Text style={{ ...styles.desc_txt }}>매물 알림 설정</Text>
            <Image
              source={require("../../../images/in_ic_68.png")}
              style={{ ...styles.iconStyle1 }}
            />
          </TouchableOpacity>
          <View style={{ ...styles.boundary, marginTop: scale(7.5) }} />
        </View>
        <View style={{ ...styles.view }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Head_Question");
            }}
            style={{ ...styles.row_view }}
          >
            <Text style={{ ...styles.title_txt }}>1:1 본사 문의하기</Text>
            <Image
              source={require("../../../images/in_ic_68.png")}
              style={{ ...styles.iconStyle1 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "#ffffff",
            padding: scale(15),
            paddingBottom: scale(20),
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 10,
              backgroundColor: "#b9b9b9",
              padding: scale(12.5),
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setLogoutModal(true);
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: scale(15),fontFamily: "Jalnan" }}>
              로그아웃
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: scale(8),
              color: "#dcdcdc",
              marginTop: scale(10),
            }}
          >
            배달의딜러 회원 탈퇴를 원하시면 여기를 눌러주세요
          </Text>
        </View>
      </View>
      <Modal isVisible={logoutModal} style={{ alignItems: "center" }}>
        <View
          style={{
            ...styles.modalbox,
            padding: scale(20),
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...styles.modaltitle }}>로그아웃 하시겠습니까?</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              delayPressIn={0}
              onPress={() => {
                setLogoutModal(false);
              }}
            >
              <Text
                style={{
                  ...styles.modalconfirm,
                  color: "#1d1d1d",
                  marginRight: scale(55),
                }}
              >
                취소
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              delayPressIn={0}
              onPress={() => {
                setLogoutModal(false);
              }}
            >
              <Text style={{ ...styles.modalconfirm }}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal isVisible={profiletModal} style={{ alignItems: "center" }}>
        <View
          style={{
            ...styles.modalbox,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              flex: 1,
              width: "100%",
              justifyContent: "center",
            }}
            delayPressIn={0}
            onPress={() => {
              setProfileModal(false);
            }}
          >
            <Text
              style={{
                ...styles.modalconfirm,
                textAlign: "left",
                marginLeft: scale(20),
                color: "#1d1d1d",
              }}
            >
              사진찍기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              flex: 1,
              width: "100%",
              justifyContent: "center",
            }}
            delayPressIn={0}
            onPress={() => {
              setProfileModal(false);
            }}
          >
            <Text
              style={{
                ...styles.modalconfirm,
                textAlign: "left",
                marginLeft: scale(20),
                color: "#1d1d1d",
              }}
            >
              갤러리
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  iconStyle1: {
    width: scale(15),
    height: scale(15),
  },
  view: {
    padding: scale(15),
    backgroundColor: "#ffffff",
    paddingTop: 0,
  },
  title_txt: {
    fontSize: scale(13),
    color: "#1d1d1d",
    fontWeight: "bold",
    marginBottom: scale(7.5),
  },
  desc_txt: { fontSize: scale(13), color: "#1d1d1d" },
  row_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: scale(7.5),
    backgroundColor: "#ffffff",
  },
  boundary: { borderBottomWidth: 0.15, borderBottomColor: "#707070" },
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
  modalbox: {
    width: scale(280),
    height: scale(100),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  modaltitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  modalconfirm: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#459bfe",
  },
  back: {
    width: scale(20),
    height: scale(20),
  },
});
