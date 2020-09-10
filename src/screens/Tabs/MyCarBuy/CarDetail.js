import React, { useState } from "react";
import { Header, CheckBox } from "react-native-elements";
import scale from "../../../common/Scale";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import Swiper from "react-native-swiper";
import { ScrollView } from "react-native-gesture-handler";

const Width = Dimensions.get("window").width;

export default function CarDetail() {
  const [drop, setDrop] = useState(false);

  return (
    <>
      <Header
        backgroundColor={"#ffffff"}
        barStyle="dark-content"
        statusBarProps={{
          translucent: true,
          backgroundColor: "#ffffff",
        }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
          paddingHorizontal: scale(15),
        }}
        leftComponent={
          <TouchableOpacity delayPressIn={0}>
            <Image
              style={{ ...styles.backicon }}
              source={require("../../../images/back_ic_72.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Text style={{ ...styles.headercenter }}>12가3456</Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            style={{ ...styles.swipe }}
            source={require("../../../images/k_7_02.png")}
          >
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                right: 5,
                top: 5,
              }}
            >
              <View
                style={{
                  ...styles.swipetop,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...styles.refund }}>3일내 환불</Text>
              </View>
              <View
                style={{
                  ...styles.swipetop,
                  marginLeft: scale(4),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...styles.refund }}>홈서비스</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.swipebottom,
                position: "absolute",
                bottom: 0,
                justifyContent: "center",
              }}
            >
              <Text style={{ ...styles.price }}>2,000만원</Text>
            </View>
          </ImageBackground>
          <View
            style={{
              backgroundColor: "#ffffff",
              paddingHorizontal: scale(15),
              paddingTop: scale(10),
              paddingBottom: scale(15),
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ ...styles.carkinds }}>기아 더뉴 K7</Text>
                <View style={{ flexDirection: "row", marginTop: scale(4) }}>
                  <Text style={{ ...styles.subcarkinds }}>2020.05.06</Text>
                  <Text style={{ ...styles.subcarkinds, marginLeft: scale(4) }}>
                    실매물 조회 완료
                  </Text>
                  <Text
                    style={{
                      ...styles.subcarkinds,
                      marginHorizontal: scale(2),
                    }}
                  >
                    {" "}
                    ·{" "}
                  </Text>
                  <Text style={{ ...styles.subcarkinds }}>경기</Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Image
                  style={{ ...styles.like }}
                  source={require("../../../images/likes_on.png")}
                />
                <Text style={{ ...styles.peoplecount, marginTop: scale(5) }}>
                  5일전 / 30명 찜
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: scale(15),
                alignItems: "center",
              }}
            >
              <Text style={{ ...styles.average }}>평균 시세</Text>
              <Text style={{ ...styles.averageprice, marginLeft: scale(30) }}>
                1,740만원 ~ 2,490만원
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#ffffff",
                elevation: 1.5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                justifyContent: "space-between",
                paddingHorizontal: scale(36.5),
                paddingVertical: scale(20),
                marginTop: scale(20),
              }}
            >
              <TouchableOpacity
                delayPressIn={0}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={{ ...styles.tripple }}
                  source={require("../../../images/performance_120.png")}
                />
                <Text style={{ ...styles.trippletext, marginTop: scale(5) }}>
                  성능점검
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={{ ...styles.tripple }}
                  source={require("../../../images/insurance_120.png")}
                />
                <Text style={{ ...styles.trippletext, marginTop: scale(5) }}>
                  보험이력
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={{ ...styles.tripple }}
                  source={require("../../../images/reckoning_120.png")}
                />
                <Text style={{ ...styles.trippletext, marginTop: scale(5) }}>
                  총비용 계산기
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: scale(15),
              }}
            >
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.twice,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...styles.twicetext }}>보험료 계산</Text>
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.twice,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...styles.twicetext }}>할부한도 조회</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.calculator,
                elevation: 1.5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                marginTop: scale(20),
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  drop ? setDrop(false) : setDrop(true);
                }}
                delayPressIn={0}
                style={{
                  ...styles.calculator,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: scale(15),
                }}
              >
                <Text style={{ ...styles.anotherviewtitle }}>
                  배송료 계산하기
                </Text>
                <Image
                  style={{ ...styles.moreless }}
                  source={
                    drop
                      ? require("../../../images/see_less_icon_88.png")
                      : require("../../../images/see_more_icon_88.png")
                  }
                />
              </TouchableOpacity>
            </View>
            {drop ? (
              <View
                style={{
                  ...styles.calculatordetail,
                  elevation: 1.5,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  paddingHorizontal: scale(15),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>로드탁송</Text>
                  <Text style={{ ...styles.baseinfodesc }}>1Km 500원</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: scale(20),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>세이프티 로더</Text>
                  <Text style={{ ...styles.baseinfodesc }}>1Km 1,200원</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>차고지 주소</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    경기 수원시 권선구 오토콜렉션 11-1
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>
                    차량 도착 주소
                  </Text>
                  <View
                    style={{
                      ...styles.searchaddress,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextInput
                      style={{
                        ...styles.searchaddressinput,
                        width: scale(161),
                        paddingLeft: scale(6),
                        paddingBottom: 0,
                        paddingTop: 0,
                      }}
                      placeholder={"주소를 입력하세요."}
                      placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
                    />
                    <TouchableOpacity
                      delayPressIn={0}
                      style={{
                        width: scale(59),
                        height: scale(25),
                        backgroundColor: "#bbbbbb",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text>주소검색</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    ...styles.searchaddress,
                    flexDirection: "row",
                    alignSelf: "flex-end",
                  }}
                >
                  <TextInput
                    style={{
                      ...styles.searchaddressinput,
                      width: scale(161),
                      paddingLeft: scale(6),
                      paddingBottom: 0,
                      paddingTop: 0,
                    }}
                    placeholder={"나머지 주소 입력"}
                    placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: scale(15),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>배달 방법</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: scale(220),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        style={{ ...styles.checkicon }}
                        source={require("../../../images/check_off_60.png")}
                      />
                      <Text>로드탁송</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        style={{ ...styles.checkicon }}
                        source={require("../../../images/check_on_60.png")}
                      />
                      <Text>세이프티 로더</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: scale(20),
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        ...styles.deliveryprice,
                        marginRight: scale(10),
                      }}
                    >
                      배송료
                    </Text>
                    <Text style={{ ...styles.caution }}>
                      ※실제 금액과 차이가 있을 수 있습니다.
                    </Text>
                  </View>
                  <Text style={{ ...styles.totalprice }}>60,000원</Text>
                </View>
              </View>
            ) : null}
            <View
              style={{
                ...styles.baseinfo,
                marginTop: scale(20),
                elevation: 1.5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                paddingHorizontal: scale(15),
                paddingVertical: scale(20),
              }}
            >
              <Text style={{ ...styles.anotherviewtitle }}>기본 정보</Text>
              <View style={{ marginTop: scale(7) }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>연식 (연형)</Text>
                  <Text style={{ ...styles.baseinfodesc }}>2017년 2월</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>연료 / 변속기</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    가솔린+전기 / 오토
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>
                    연비 / 연비등급
                  </Text>
                  <Text style={{ ...styles.baseinfodesc }}>없음</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>차종 / 배기량</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    SUV·RV / 1,580cc
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>색상</Text>
                  <Text style={{ ...styles.baseinfodesc }}>흰색</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>차량위치</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    경기 수원시 권선구
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: scale(330),
                height: scale(189.8),
                backgroundColor: "#ffffff",
                marginTop: scale(20),
                elevation: 1.5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                paddingVertical: scale(20),
                paddingHorizontal: scale(15),
              }}
            >
              <Text style={{ ...styles.anotherviewtitle }}>주요 옵션</Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ ...styles.selectbox, backgroundColor: "#459bfe" }}
                >
                  <Text style={{ ...styles.selectboxtext, color: "#ffffff" }}>
                    블랙박스
                  </Text>
                </View>
                <View
                  style={{ ...styles.selectbox, backgroundColor: "#ffffff" }}
                >
                  <Text style={{ ...styles.selectboxtext, color: "#999999" }}>
                    네비게이션
                  </Text>
                </View>
                <View
                  style={{ ...styles.selectbox, backgroundColor: "#ffffff" }}
                >
                  <Text style={{ ...styles.selectboxtext, color: "#999999" }}>
                    썬루프
                  </Text>
                </View>
                <View
                  style={{ ...styles.selectbox, backgroundColor: "#ffffff" }}
                >
                  <Text style={{ ...styles.selectboxtext, color: "#999999" }}>
                    후방카메라
                  </Text>
                </View>
                <View
                  style={{ ...styles.selectbox, backgroundColor: "#459bfe" }}
                >
                  <Text style={{ ...styles.selectboxtext, color: "#ffffff" }}>
                    후방감지센서
                  </Text>
                </View>
                <View
                  style={{ ...styles.selectbox, backgroundColor: "#459bfe" }}
                >
                  <Text style={{ ...styles.selectboxtext, color: "#ffffff" }}>
                    열선시트
                  </Text>
                </View>
                <View
                  style={{ ...styles.selectbox, backgroundColor: "#ffffff" }}
                >
                  <Text style={{ ...styles.selectboxtext, color: "#999999" }}>
                    하이패스
                  </Text>
                </View>
                <View
                  style={{ ...styles.selectbox, backgroundColor: "#ffffff" }}
                >
                  <Text style={{ ...styles.selectboxtext, color: "#999999" }}>
                    스마트키
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.selectboxnull,
                    backgroundColor: "transparent",
                  }}
                >
                  {/*<Text style={{...styles.selectboxtext}}>스마트키</Text>*/}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backicon: {
    width: scale(18),
    height: scale(18),
  },
  headercenter: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(16),
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#1d1d1d",
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  wrapper: {
    flex: 1,
  },
  swipe: {
    width: Width,
    height: scale(200),
  },
  swipetop: {
    width: scale(60),
    height: scale(20),
    borderRadius: 25,
    backgroundColor: "#ffd619",
  },
  swipebottom: {
    width: scale(90),
    height: scale(30),
    backgroundColor: "#001740",
  },
  refund: {
    fontFamily: "NotoSans-Bold",
    fontSize: scale(9),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#001740",
  },
  price: {
    fontFamily: "NotoSans-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  carkinds: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  subcarkinds: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: -0.3,
    textAlign: "left",
    color: "#999999",
  },
  like: {
    width: scale(24),
    height: scale(24),
  },
  peoplecount: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#bebebe",
  },
  average: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: -0.45,
    textAlign: "left",
    color: "#000000",
  },
  averageprice: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: -0.45,
    textAlign: "left",
    color: "#459bfe",
  },
  tripple: {
    width: scale(30),
    height: scale(30),
  },
  trippletext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(12),
    fontStyle: "normal",
    letterSpacing: -0.36,
    textAlign: "left",
    color: "#000000",
  },
  twice: {
    width: scale(160),
    height: scale(28),
    borderRadius: 5,
    backgroundColor: "#459bfe",
  },
  twicetext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: -0.33,
    textAlign: "center",
    color: "#ffffff",
  },
  calculator: {
    width: scale(330),
    height: scale(58.8),
    backgroundColor: "#ffffff",
  },
  calculatordetail: {
    width: scale(330),
    height: scale(214),
    backgroundColor: "#ffffff",
  },
  moreless: {
    width: scale(22),
    height: scale(22),
  },
  baseinfo: {
    width: scale(330),
    height: scale(216.3),
    backgroundColor: "#ffffff",
  },
  baseinfotitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#999999",
  },
  baseinfodesc: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#000000",
  },
  searchaddress: {
    width: scale(220),
    height: scale(25),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  searchaddressinput: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  spreadaddress: {
    width: scale(220),
    height: scale(25),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  checkicon: {
    width: scale(15),
    height: scale(15),
  },
  deliveryprice: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#999999",
  },
  caution: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#bbbbbb",
  },
  totalprice: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#000000",
  },
  anotherviewtitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  selectbox: {
    width: scale(90),
    height: scale(30),
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#b5b5b5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(14),
  },
  selectboxnull: {
    width: scale(90),
    height: scale(30),
  },
  selectboxtext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
  },
});