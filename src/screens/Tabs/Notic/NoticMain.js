import React, { useState, useEffect } from "react";
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
  FlatList,
} from "react-native";
import AppServer from "../../../common/AppServer";

export default function NoticMain({ route, navigation }) {
  const [notiList, setNotiList] = useState(null);
  const [page, setPage] = useState(1);

  const _renderItem = ({ item }) => {
    console.log(">>>>>", item);
  };

  const _notiList = async () => {
    setPage(page + 1);

    try {
      let data = await AppServer.CARDEALER_API_00013({ page: page, range: 30 });
      console.log("_notiList", data);
      if (data.success_yn) {
        setNotiList(data.list);
      }
    } catch (error) {
      console.log("_notiList", error);
    }
  };

  useEffect(() => {
    const focus = navigation.addListener("focus", async () => {
      _notiList();
    });
    return focus;
  }, [navigation]);

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
        <View style={{ flex: 1 }}>
          <View
            style={{
              padding: scale(15),
              borderBottomColor: "rgba(0, 0, 0, 0.1)",
              borderBottomWidth: 0.5,
              backgroundColor: "#ffffff",
            }}
          >
            <Text style={{ ...styles.maintitle }}>공지사항</Text>
          </View>
          {notiList ? (
            <FlatList
              data={notiList}
              renderItem={_renderItem}
              keyExtractor={(item) => item.tot_cnt}
            />
          ) : null}
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
  maintitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    textAlign: "left",
    color: "#1d1d1d",
  },
});
