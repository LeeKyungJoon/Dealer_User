import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyInfoMain from "./MyInfo/MyInfoMain";
import Head_Question from "./MyInfo/Head_Question";
import Noti_Setting from "./MyInfo/Noti_Setting";
import Reset_Password from "./MyInfo/Reset_Password";
import Reset_Phone from "./MyInfo/Reset_Phone";

const Stack = createStackNavigator();

export default function MyInfoTab(props) {
  return (
    <Stack.Navigator initialRouteName="MyInfoMain" headerMode="none">
      <Stack.Screen name="MyInfoMain" component={MyInfoMain} />
      <Stack.Screen name="Head_Question" component={Head_Question} />
      <Stack.Screen name="Noti_Setting" component={Noti_Setting} />
      <Stack.Screen name="Reset_Password" component={Reset_Password} />
      <Stack.Screen name="Reset_Phone" component={Reset_Phone} />
    </Stack.Navigator>
  );
}
