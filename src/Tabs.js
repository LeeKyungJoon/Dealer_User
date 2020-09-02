import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import scale from "./common/Scale";
import MyCarBuy from "./screens/Tabs/MyCarBuy/MyCarBuyMain";
import MyCarSell from "./screens/Tabs/MyCarSell/MyCarSellMain";
import Consult from "./screens/Tabs/Consult/ConsultMain";
import Notic from "./screens/Tabs/Notic/NoticMain";
import MyInfo from "./screens/Tabs/MyInfo/MyInfoMain";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const mainRoutes = [
    {
      name: "내차구매",
      com: MyCarBuy,
      inactiveIcon: require("./images/buy_ic_off_120.png"),
      activeIcon: require("./images/buy_ic_on_120.png"),
    },
    {
      name: "내차판매",
      com: MyCarSell,
      inactiveIcon: require("./images/sell_ic_off_120.png"),
      activeIcon: require("./images/sell_ic_on_120.png"),
    },
    {
      name: "상담요청",
      com: Consult,
      inactiveIcon: require("./images/consult_ic_off_120.png"),
      activeIcon: require("./images/consult_ic_on_120.png"),
    },
    {
      name: "공지사항",
      com: Notic,
      inactiveIcon: require("./images/guide_ic_off_120.png"),
      activeIcon: require("./images/guide_ic_on_120.png"),
    },
    {
      name: "내정보",
      com: MyInfo,
      inactiveIcon: require("./images/mypage_ic_off_120.png"),
      activeIcon: require("./images/mypage_ic_off_120.png"),
    },
  ];

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName={"내차사기"}
      tabBarOptions={{
        activeTintColor: "#459bfe",
        inactiveTintColor: "#bababa",
        labelStyle: {
          fontFamily: "Roboto-Regular",
          fontSize: scale(8),
          fontStyle: "normal",
          letterSpacing: 0,
          textAlign: "center",
        },
      }}
    >
      {mainRoutes.map((route) => (
        <Tab.Screen
          key={`screen-${route.name}`}
          name={route.name}
          component={route.com}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ width: scale(30), height: scale(30) }}
                  source={focused ? route.activeIcon : route.inactiveIcon}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
