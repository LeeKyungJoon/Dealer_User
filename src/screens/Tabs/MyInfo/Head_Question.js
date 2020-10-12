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
  Dimensions
} from "react-native";
import Modal from 'react-native-modal'
import AppServer from "../../../common/AppServer";

const Width = Dimensions.get("window").width;

export default function Head_Question({ route, navigation }) {
  const [selectResult, setSelectResult] = useState('문의종류를 선택하세요.')
  const [select, setSelect] = useState('')
  const [selectList, setSelectList] = useState(['딜러에 대한 문의', '어플 관련 문의', '기타'])
  const [isvisible, setIsvisible] = useState(false)

  const _open = () => {
    setIsvisible(true)
  }

  const _hide = () => {
    setIsvisible(false)
  }

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
        centerComponent={<Text style={{ ...styles.title }}>1:1 본사 문의하기</Text>}
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
            <View style={{paddingHorizontal: scale(15), marginTop: scale(15)}}>
              <Text style={{...styles.subtitle}}>본사 문의</Text>
              <View>
                <Text style={{...styles.subsubtitle, marginTop: scale(25)}}>문의 종류</Text>
                <TouchableOpacity 
                onPress={() => {
                  _open()
                }}
                style={{...styles.touch, 
                  flexDirection: 'row', 
                  alignItems: 'center',
                   justifyContent: 'space-between',
                   paddingVertical: scale(8), 
                   paddingHorizontal: scale(15), 
                   marginTop: scale(9)}} 
                   delayPressIn={0}>
                  <Text style={{...styles.touchtext, color: selectResult === '문의종류를 선택하세요.' ? "rgba(0, 0, 0, 0.3)" :  '#000000'}}>{selectResult}</Text>
                  <Image style={{...styles.ic}} source={require('../../../images/see_more_icon_88.png')}/>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: scale(50)}}>
                <Text style={{...styles.subsubtitle}}>상세 내용</Text>
                <TextInput textAlignVertical='top' multiline={true} style={{...styles.input, marginTop: scale(9) }} placeholder="상세한 내용을 입력해주세요." placeholderTextColor="rgba(0, 0, 0, 0.3)"/>
              </View>
            </View>
            <TouchableOpacity
            style={{...styles.bottombutton, alignSelf: 'center', justifyContent: 'center', marginTop: scale(30)}}
              delayPressIn={0}
            >
              <Text style={{ ...styles.bottomtext }}>보내기</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Modal isVisible={isvisible} style={{alignItems: 'center'}} useNativeDriver={true}>
        <View style={{...styles.modalbox}}>
          {selectList.map((item, index) => {
            return (
              <TouchableOpacity
              onPress={() => {
                setSelect(item)
              }}
                key={index} 
                delayPressIn={0}
                style={{flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                borderStyle: "solid",
                  borderWidth: 0.5,
                  borderColor: "rgba(0, 0, 0, 0.2)",
                  paddingHorizontal: scale(20),
                  paddingVertical: scale(10)
                  }}>
                <Text>{item}</Text>
                {select === item
                ? <Image style={{width: scale(30), height: scale(30)}} source={require('../../../images/checkon_ic_120.png')}/>
                 : <Image style={{width: scale(30), height: scale(30)}} source={require('../../../images/checkoff_ic_120.png')}/> }
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity onPress={() => {
            
            if(select.length > 0) {
              _hide()
              setSelectResult(select)
            } else {
              _hide()
            }
           
          }} style={{...styles.confirmbox}} delayPressIn={0}>
            <Text style={{...styles.confirmtext}}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    backgroundColor: "#ffffff",
  },
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: "#001740",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  bottomtext: {
    fontFamily: "Jalnan",
    fontSize: scale(15),
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  subtitle: {
    fontFamily: "Roboto-Bold",
  fontSize: scale(15),
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#1d1d1d"
  },
  subsubtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d"
  },
  touch: {
    borderRadius: scale(5),
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 0.5,
  borderColor: "rgba(0, 0, 0, 0.3)"
  },
  touchtext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    
  },
  ic: {
    width: scale(22),
    height: scale(22)
  },
  input: {
    height: scale(262),
    borderRadius: scale(5),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: scale(14),
    paddingTop: scale(11.2)
  },
  modalbox: {
    width: scale(280),
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 0.3,
  borderColor: "#707070"
  },
  confirmbox: {
    width: scale(280),
    backgroundColor: "#459bfe",
    paddingVertical: scale(10)
  },
  confirmtext: {
    fontFamily: "Roboto-Regular",
  fontSize: scale(13),
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#ffffff"
  }
});
