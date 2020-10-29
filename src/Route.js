import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLoading from './common/MainLoading';
import Sign from './Sign';
import Tabs from './Tabs';
//소비자용_내차구매
import SearchCar from './screens/Tabs/MyCarBuy/SearchCar';
import SearchCarDetail from './screens/Tabs/MyCarBuy/SearchCarDetail';
import CarDetail from './screens/Tabs/MyCarBuy/CarDetail';
import CarDetailPersonal from './screens/Tabs/MyCarBuy/CarDetailPersonal';
import CarPerformanceCheck from './screens/Tabs/MyCarBuy/CarPerformanceCheck';
import CarPerformancePersonal from './screens/Tabs/MyCarBuy/CarPerformancePersonal';
import InsuranceHistory from './screens/Tabs/MyCarBuy/InsuranceHistory';
import AllBuyPay from './screens/Tabs/MyCarBuy/AllBuyPay';
import DealerInfo from './screens/Tabs/MyCarBuy/DealerInfo';
import BuyCash from './screens/Tabs/MyCarBuy/BuyCash';
import BuyCashComplete from './screens/Tabs/MyCarBuy/BuyCashComplete';
import BuyCar from './screens/Tabs/MyCarBuy/BuyCar';
import Terms from './screens/Tabs/MyCarBuy/Terms';
import Rules from './screens/Tabs/MyCarBuy/Rules';
import DepositAccount from './screens/Tabs/MyCarBuy/DepositAccount';
import DepositAccountCom from './screens/Tabs/MyCarBuy/DepositAccountCom';
import ReceivePlace from './screens/Tabs/MyCarBuy/ReceivePlace';
import RefundAccount from './screens/Tabs/MyCarBuy/RefundAccount';
import DeliverySchedule from './screens/Tabs/MyCarBuy/DeliverySchedule';
import CarConfirmation from './screens/Tabs/MyCarBuy/CarConfirmation';
import ReviewRegist from './screens/Tabs/MyCarBuy/ReviewRegist';
import TransferRefund from './screens/Tabs/MyCarBuy/TransferRefund';
import RealReviewDetail from './screens/Tabs/MyCarBuy/RealReviewDetail';
import Chat from './screens/Tabs/MyCarBuy/Chat';
import VisitReservation from './screens/Tabs/MyCarBuy/VisitReservation';
import DealerReviewList from './screens/Tabs/MyCarBuy/DealerReviewList';
import DealerCarAll from './screens/Tabs/MyCarBuy/DealerCarAll';
///////
//소비자용_내차판매
import QuoteRequest from './screens/Tabs/MyCarSell/QuoteRequest';
import EnterSellsPrice from './screens/Tabs/MyCarSell/EnterSellsPrice';
import DefaultInfo from './screens/Tabs/MyCarSell/DefaultInfo';
import DefaultInfoConfirm from './screens/Tabs/MyCarSell/DefaultInfoConfirm';
import SelectTransmission from './screens/Tabs/MyCarSell/SelectTransmission';
import DistanceDriven from './screens/Tabs/MyCarSell/DistanceDriven';
import Options from './screens/Tabs/MyCarSell/Options';
import CarStatus from './screens/Tabs/MyCarSell/CarStatus';
import DealAddress from './screens/Tabs/MyCarSell/DealAddress';
import VideoPicture from './screens/Tabs/MyCarSell/VideoPicture';
import AddCarInfo from './screens/Tabs/MyCarSell/AddCarInfo';
import AddAccident from './screens/Tabs/MyCarSell/AddAccident';
import AddComment from './screens/Tabs/MyCarSell/AddComment';
import QuoteComplete from './screens/Tabs/MyCarSell/QuoteComplete';
import DealerAuction from './screens/Tabs/MyCarSell/DealerAuction';
///////
//소비자용_상담요청
///////
//소비자용_공지사항
import NoticDetail from './screens/Tabs/Notic/NoticDetail';
///////
//소비자용_내정보
import Head_Question from './screens/Tabs/MyInfo/Head_Question';
import Noti_Setting from './screens/Tabs/MyInfo/Noti_Setting';
import Reset_Password from './screens/Tabs/MyInfo/Reset_Password';
import Reset_Phone from './screens/Tabs/MyInfo/Reset_Phone';
///////
import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName={'MainLoading'}>
        <Stack.Screen
          name={'MainLoading'}
          component={MainLoading}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'Sign'}
          component={Sign}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'Tabs'}
          component={Tabs}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        {/* 소비자용_내차구매 */}

        <Stack.Screen
          name={'CarDetail'}
          component={CarDetail}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'CarDetailPersonal'}
          component={CarDetailPersonal}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'CarPerformanceCheck'}
          component={CarPerformanceCheck}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'CarPerformancePersonal'}
          component={CarPerformancePersonal}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'InsuranceHistory'}
          component={InsuranceHistory}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'AllBuyPay'}
          component={AllBuyPay}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DealerInfo'}
          component={DealerInfo}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'BuyCash'}
          component={BuyCash}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'BuyCashComplete'}
          component={BuyCashComplete}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'BuyCar'}
          component={BuyCar}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'Terms'}
          component={Terms}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'Rules'}
          component={Rules}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DepositAccount'}
          component={DepositAccount}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DepositAccountCom'}
          component={DepositAccountCom}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'ReceivePlace'}
          component={ReceivePlace}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'RefundAccount'}
          component={RefundAccount}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DeliverySchedule'}
          component={DeliverySchedule}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'CarConfirmation'}
          component={CarConfirmation}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'ReviewRegist'}
          component={ReviewRegist}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'TransferRefund'}
          component={TransferRefund}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'RealReviewDetail'}
          component={RealReviewDetail}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'Chat'}
          component={Chat}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'VisitReservation'}
          component={VisitReservation}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DealerReviewList'}
          component={DealerReviewList}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DealerCarAll'}
          component={DealerCarAll}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        {/*  */}
        {/* 소비자용_내차판매 */}
        <Stack.Screen
          name={'QuoteRequest'}
          component={QuoteRequest}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'EnterSellsPrice'}
          component={EnterSellsPrice}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DefaultInfo'}
          component={DefaultInfo}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DefaultInfoConfirm'}
          component={DefaultInfoConfirm}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'SelectTransmission'}
          component={SelectTransmission}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DistanceDriven'}
          component={DistanceDriven}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'Options'}
          component={Options}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'CarStatus'}
          component={CarStatus}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DealAddress'}
          component={DealAddress}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'VideoPicture'}
          component={VideoPicture}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'AddCarInfo'}
          component={AddCarInfo}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'AddAccident'}
          component={AddAccident}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'AddComment'}
          component={AddComment}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'QuoteComplete'}
          component={QuoteComplete}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name={'DealerAuction'}
          component={DealerAuction}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        {/*  */}
        {/* 소비자용_상담요청 */}
        {/*  */}
        {/* 소비자용_공지사항 */}
        <Stack.Screen
          name={'NoticDetail'}
          component={NoticDetail}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        {/*  */}
        {/* 소비자용_내정보 */}
        <Stack.Screen
          name="Head_Question"
          component={Head_Question}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="Noti_Setting"
          component={Noti_Setting}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="Reset_Password"
          component={Reset_Password}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="Reset_Phone"
          component={Reset_Phone}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        {/*  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
