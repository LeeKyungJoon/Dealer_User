import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Sign from "./Sign";
import Tabs from "./Tabs";
//소비자용_내차구매
import SearchCar from "./screens/Tabs/MyCarBuy/SearchCar";
import CarDetail from "./screens/Tabs/MyCarBuy/CarDetail";
import CarPerformanceCheck from "./screens/Tabs/MyCarBuy/CarPerformanceCheck";
import InsuranceHistory from "./screens/Tabs/MyCarBuy/InsuranceHistory";
import AllBuyPay from "./screens/Tabs/MyCarBuy/AllBuyPay";
import DealerInfo from "./screens/Tabs/MyCarBuy/DealerInfo";
import BuyCash from "./screens/Tabs/MyCarBuy/BuyCash";
import BuyCashComplete from "./screens/Tabs/MyCarBuy/BuyCashComplete";
import BuyCar from "./screens/Tabs/MyCarBuy/BuyCar";
import Terms from "./screens/Tabs/MyCarBuy/Terms";
import Rules from "./screens/Tabs/MyCarBuy/Rules";
import DepositAccount from "./screens/Tabs/MyCarBuy/DepositAccount";
import ReceivePlace from "./screens/Tabs/MyCarBuy/ReceivePlace";
import RefundAccount from "./screens/Tabs/MyCarBuy/RefundAccount";
import DeliverySchedule from "./screens/Tabs/MyCarBuy/DeliverySchedule";
import CarConfirmation from "./screens/Tabs/MyCarBuy/CarConfirmation";
import ReviewRegist from "./screens/Tabs/MyCarBuy/ReviewRegist";
import TransferRefund from "./screens/Tabs/MyCarBuy/TransferRefund";
///////
//소비자용_내차판매
import QuoteRequest from "./screens/Tabs/MyCarSell/QuoteRequest";
import EnterSellsPrice from "./screens/Tabs/MyCarSell/EnterSellsPrice";
import DefaultInfo from "./screens/Tabs/MyCarSell/DefaultInfo";
import DefaultInfoConfirm from "./screens/Tabs/MyCarSell/DefaultInfoConfirm";
import SelectTransmission from "./screens/Tabs/MyCarSell/SelectTransmission";
import DistanceDriven from "./screens/Tabs/MyCarSell/DistanceDriven";
import Options from "./screens/Tabs/MyCarSell/Options";
import CarStatus from "./screens/Tabs/MyCarSell/CarStatus";
import DealAddress from "./screens/Tabs/MyCarSell/DealAddress";
///////
//소비자용_상담요청
///////
//소비자용_공지사항
///////
//소비자용_내정보
import Head_Question from "./screens/Tabs/MyInfo/Head_Question";
import Noti_Setting from "./screens/Tabs/MyInfo/Noti_Setting";
import Reset_Password from "./screens/Tabs/MyInfo/Reset_Password";
import Reset_Phone from "./screens/Tabs/MyInfo/Reset_Phone";
///////

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"} initialRouteName={"DealAddress"}>
        <Stack.Screen name={"Sign"} component={Sign} />
        <Stack.Screen name={"Tabs"} component={Tabs} />
        {/* 소비자용_내차구매 */}
        <Stack.Screen name={"SearchCar"} component={SearchCar} />
        <Stack.Screen name={"CarDetail"} component={CarDetail} />
        <Stack.Screen
          name={"CarPerformanceCheck"}
          component={CarPerformanceCheck}
        />
        <Stack.Screen name={"InsuranceHistory"} component={InsuranceHistory} />
        <Stack.Screen name={"AllBuyPay"} component={AllBuyPay} />
        <Stack.Screen name={"DealerInfo"} component={DealerInfo} />
        <Stack.Screen name={"BuyCash"} component={BuyCash} />
        <Stack.Screen name={"BuyCashComplete"} component={BuyCashComplete} />
        <Stack.Screen name={"BuyCar"} component={BuyCar} />
        <Stack.Screen name={"Terms"} component={Terms} />
        <Stack.Screen name={"Rules"} component={Rules} />
        <Stack.Screen name={"DepositAccount"} component={DepositAccount} />
        <Stack.Screen name={"ReceivePlace"} component={ReceivePlace} />
        <Stack.Screen name={"RefundAccount"} component={RefundAccount} />
        <Stack.Screen name={"DeliverySchedule"} component={DeliverySchedule} />
        <Stack.Screen name={"CarConfirmation"} component={CarConfirmation} />
        <Stack.Screen name={"ReviewRegist"} component={ReviewRegist} />
        <Stack.Screen name={"TransferRefund"} component={TransferRefund} />
        {/*  */}
        {/* 소비자용_내차판매 */}
        <Stack.Screen name={"QuoteRequest"} component={QuoteRequest} />
        <Stack.Screen name={"EnterSellsPrice"} component={EnterSellsPrice} />
        <Stack.Screen name={"DefaultInfo"} component={DefaultInfo} />
        <Stack.Screen
          name={"DefaultInfoConfirm"}
          component={DefaultInfoConfirm}
        />
        <Stack.Screen
          name={"SelectTransmission"}
          component={SelectTransmission}
        />
        <Stack.Screen name={"DistanceDriven"} component={DistanceDriven} />
        <Stack.Screen name={"Options"} component={Options} />
        <Stack.Screen name={"CarStatus"} component={CarStatus} />
        <Stack.Screen name={"DealAddress"} component={DealAddress} />
        {/*  */}
        {/* 소비자용_상담요청 */}
        {/*  */}
        {/* 소비자용_공지사항 */}
        {/*  */}
        {/* 소비자용_내정보 */}
        <Stack.Screen name="Head_Question" component={Head_Question} />
        <Stack.Screen name="Noti_Setting" component={Noti_Setting} />
        <Stack.Screen name="Reset_Password" component={Reset_Password} />
        <Stack.Screen name="Reset_Phone" component={Reset_Phone} />
        {/*  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
