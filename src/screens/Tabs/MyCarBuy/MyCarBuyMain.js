import React, { useState } from "react";
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
  ImageBackground,
} from "react-native";
import Modal from "react-native-modal";
import Swiper from "react-native-swiper";

export default function MyCarBuyMain() {
  const [isvisible, setIsvisible] = useState(false);
  const [isvisible1, setIsvisible1] = useState(false);

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
        leftComponent={
          <TouchableOpacity
            style={{ marginLeft: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.search }}
              source={require("../../../images/search_ic_72.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Image
            style={{ ...styles.mainlogo }}
            source={require("../../../images/logo.png")}
          />
        }
        rightComponent={
          <TouchableOpacity
            style={{ marginRight: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.alert }}
              source={require("../../../images/alert_ic_72.png")}
            />
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <Swiper
          containerStyle={styles.wrapper}
          paginationStyle={{ marginBottom: scale(10) }}
          activeDotColor={"#001740"}
          loop={false}
        >
          <Image
            style={{ ...styles.topimage }}
            source={require("../../../images/i_43_w_q_055_kj_n_q_9_e_w_cu_vb_5_jx_y_t_ak.png")}
          />
          <Image
            style={{ ...styles.topimage }}
            source={require("../../../images/i_43_w_q_055_kj_n_q_9_e_w_cu_vb_5_jx_y_t_ak.png")}
          />
          <Image
            style={{ ...styles.topimage }}
            source={require("../../../images/i_43_w_q_055_kj_n_q_9_e_w_cu_vb_5_jx_y_t_ak.png")}
          />
        </Swiper>
        <View style={{ flex: 1 }}>
          <ScrollView
            style={{
              paddingHorizontal: scale(15),
              paddingTop: scale(20),
              backgroundColor: "#f9f9f9",
            }}
            contentContainerStyle={{ paddingBottom: scale(15) }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: scale(12),
              }}
            >
              <Text style={{ ...styles.categorytitle }}>
                인기 매물 <Text style={{ color: "#459bfe" }}>#국산차</Text>
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ ...styles.preicon }}
                  source={require("../../../images/premium_on.png")}
                />
                <Text style={{ ...styles.pretext, marginRight: scale(3) }}>
                  프리미엄 매물 모아보기
                </Text>
                <TouchableOpacity delayPressIn={0}>
                  <Image
                    style={{ ...styles.onofficon }}
                    source={require("../../../images/check_off_ic_40.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                ...styles.carlist,
                elevation: 1.5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
              }}
            >
              <ImageBackground
                style={{ ...styles.carimage }}
                source={require("../../../images/k_7_02.png")}
              >
                <View
                  style={{
                    width: scale(90),
                    height: scale(30),
                    backgroundColor: "#001740",
                    position: "absolute",
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ ...styles.price }}>2,000만원</Text>
                </View>
                <Image
                  style={{ ...styles.premark, position: "absolute" }}
                  source={require("../../../images/premium.png")}
                />
                <TouchableOpacity
                  delayPressIn={0}
                  style={{ position: "absolute", right: 5, top: 5 }}
                >
                  <Image
                    style={{
                      ...styles.like,
                    }}
                    source={require("../../../images/likes_off.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>

              <Image
                style={{
                  ...styles.avator,
                  position: "absolute",
                  right: 10,
                  bottom: 50,
                }}
                source={require("../../../images/shutterstock_682551649.png")}
              />
              <View style={{ padding: scale(10) }}>
                <Text style={{ ...styles.carname }}>기아 더뉴 K7</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: scale(3),
                  }}
                >
                  <Text style={{ ...styles.carhistory }}>
                    서울 / 18년 10월 / 8,859km
                  </Text>
                  <Text style={{ ...styles.daypeople }}>5일전 / 30명 찜</Text>
                </View>
              </View>
            </View>

            <Text
              style={{
                ...styles.categorytitle,
                marginBottom: scale(12),
                marginTop: scale(25),
              }}
            >
              인기 매물 <Text style={{ color: "#459bfe" }}>#수입차</Text>
            </Text>
            <View
              style={{
                ...styles.carlist,
                elevation: 1.5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
              }}
            >
              <ImageBackground
                style={{ ...styles.carimage }}
                source={require("../../../images/1.png")}
              >
                <View
                  style={{
                    width: scale(90),
                    height: scale(30),
                    backgroundColor: "#001740",
                    position: "absolute",
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ ...styles.price }}>5,000만원</Text>
                </View>
                <TouchableOpacity
                  delayPressIn={0}
                  style={{ position: "absolute", right: 5, top: 5 }}
                >
                  <Image
                    style={{
                      ...styles.like,
                    }}
                    source={require("../../../images/likes_on.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>

              <Image
                style={{
                  ...styles.avator,
                  position: "absolute",
                  right: 10,
                  bottom: 50,
                }}
                source={require("../../../images/shutterstock_682551649.png")}
              />
              <View style={{ padding: scale(10) }}>
                <Text style={{ ...styles.carname }}>BMW 528i</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: scale(3),
                  }}
                >
                  <Text style={{ ...styles.carhistory }}>
                    서울 / 18년 10월 / 8,859km
                  </Text>
                  <Text style={{ ...styles.daypeople }}>5일전 / 30명 찜</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: scale(25) }}>
              <Text style={{ ...styles.real }}>
                #리얼 후기 <Text style={{ color: "#1d1d1d" }}>확인하기</Text>
              </Text>
              <View
                style={{
                  marginBottom: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <View
                  style={{
                    width: scale(157.5),
                    height: scale(180),
                    backgroundColor: "#ffffff",
                    elevation: 1.5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
                    source={require("../../../images/g_703.png")}
                  >
                    <Image
                      style={{
                        ...styles.premark,
                        position: "absolute",
                      }}
                      source={require("../../../images/premium.png")}
                    />
                  </ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: "absolute",
                      right: 4,
                      bottom: 40,
                    }}
                    source={require("../../../images/shutterstock_682551649.png")}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: scale(157.5),
                    height: scale(180),
                    backgroundColor: "#ffffff",
                    elevation: 1.5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    marginBottom: scale(20),
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
                    source={require("../../../images/g_703.png")}
                  ></ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: "absolute",
                      right: 4,
                      bottom: 40,
                    }}
                    source={require("../../../images/shutterstock_682551649.png")}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: scale(157.5),
                    height: scale(180),
                    backgroundColor: "#ffffff",
                    elevation: 1.5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    marginBottom: scale(20),
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
                    source={require("../../../images/g_703.png")}
                  ></ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: "absolute",
                      right: 4,
                      bottom: 40,
                    }}
                    source={require("../../../images/shutterstock_682551649.png")}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <Modal isVisible={isvisible} style={{ alignItems: "center" }}>
            <View
              style={{
                ...styles.modalview,
                paddingHorizontal: scale(20),
                paddingVertical: scale(16),
              }}
            >
              <Text style={{ ...styles.modaltext }}>
                주문 요청하신{"\n"}
                <Text style={{ fontFamily: "Roboto-Bold" }}>
                  12가3456, 기아, 더뉴 K7, 2017년식
                </Text>{" "}
                차량을 지금 바로 구매하실 수 있습니다.
              </Text>
              <TouchableOpacity
                delayPressIn={0}
                style={{ marginTop: scale(20) }}
              >
                <Text style={{ ...styles.modalbutton }}>구매하러 가기</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal isVisible={isvisible1} style={{ alignItems: "center" }}>
            <View
              style={{
                ...styles.modalview,
                paddingHorizontal: scale(20),
                paddingVertical: scale(16),
              }}
            >
              <Text style={{ ...styles.modaltext }}>
                입금이 확인되었습니다. 구매하신 차량을 인수받을 장소와 일정을
                필히 입력해주세요.
              </Text>
              <TouchableOpacity
                delayPressIn={0}
                style={{ marginTop: scale(20) }}
              >
                <Text style={{ ...styles.modalbutton }}>입력하러 가기</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
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
  modalview: {
    width: scale(280),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  modaltext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    lineHeight: scale(18),
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  modalbutton: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "right",
    color: "#459bfe",
  },
});
