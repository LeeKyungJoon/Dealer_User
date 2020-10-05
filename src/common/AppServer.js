import Http from "./Http";
import { sha256 } from "react-native-sha256";

export default class AppServer {
  //이메일 중복체크
  static CARDEALER_API_00007 = async (user_email) => {
    console.log("이메일 중복체크 응답");
    try {
      let response = await Http.get(
        "/cardealer/CARDEALER_API_00007",
        {
          params: {
            user_email: user_email,
          },
        },
        { "Access-Control-Allow-Origin": "*" }
      );
      console.log("이메일 중복체크 확인", response.data);
    } catch (error) {
      console.log("CARDEALER_API_00007", error);
    }
  };
}