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
      return response.data;
    } catch (error) {
      console.log("CARDEALER_API_00007", error);
      return error.response.data;
    }
  };

  //휴대폰 인증
  static CARDEALER_API_00006 = async ({ user_phone, phone_gb, user_type }) => {
    console.log("휴대폰 인증 응답");
    try {
      let response = await Http.post(
        "/cardealer/CARDEALER_API_00006",
        {
          user_phone: user_phone,
          phone_gb: phone_gb,
          user_type: user_type,
        },
        { "Access-Control-Allow-Origin": "*" }
      );
      console.log("휴대폰 인증 확인", response.data);
      return response.data;
    } catch (error) {
      console.log("CARDEALER_API_00006", error);
      return error.response.data;
    }
  };

  //휴대폰 인증체크
  static CARDEALER_API_00006_2 = async ({ user_phone, phone_conf_number }) => {
    console.log("휴대폰 인증체크 응답");
    try {
      let response = await Http.post(
        "/cardealer/CARDEALER_API_00006_2",
        {
          user_phone: user_phone,
          phone_conf_number: phone_conf_number,
        },
        { "Access-Control-Allow-Origin": "*" }
      );
      console.log("휴대폰 인증체크 확인", response.data);
      return response.data;
    } catch (error) {
      console.log("CARDEALER_API_00006_2", error);
      return error.response.data;
    }
  };

  //회원가입
  static CARDEALER_API_00005 = async ({
    user_nm,
    user_email,
    user_phone,
    phone_conf_number,
    user_pass,
    social_yn,
    social_type,
    push_key,
    update_page_yn,
  }) => {
    console.log("회원가입 응답");
    try {
      let response = await Http.post(
        "/cardealer/CARDEALER_API_00005",
        {
          user_nm: user_nm,
          user_email: user_email,
          user_phone: user_phone,
          phone_conf_number: phone_conf_number,
          user_pass: user_pass,
          social_yn: social_yn,
          social_type: social_type,
          push_key: push_key,
          update_page_yn: update_page_yn,
        },
        { "Access-Control-Allow-Origin": "*" }
      );
      console.log("회원가입 확인", response.data);
      return response.data;
    } catch (error) {
      console.log("CARDEALER_API_00005", error);
      return error.response.data;
    }
  };

  //비밀번호 찾기
  static CARDEALER_API_00008 = async ({ phone_conf_number, user_phone }) => {
    console.log("비밀번호 찾기 응답");
    try {
      let response = await Http.post(
        "/cardealer/CARDEALER_API_00008",
        {
          phone_conf_number: phone_conf_number,
          user_phone: user_phone,
        },
        { "Access-Control-Allow-Origin": "*" }
      );
      console.log("비밀번호 찾기 확인", response.data);
      return response.data;
    } catch (error) {
      console.log("CARDEALER_API_00008", error);
      return error.response.data;
    }
  };

  //로그인
  static CARDEALER_API_GET_TOKEN = async ({
    user_pass,
    user_email,
    uuid,
    push_key,
  }) => {
    console.log("로그인 응답");
    try {
      let response = await Http.post(
        "/cardealer/CARDEALER_API_GET_TOKEN",
        {
          user_pass: user_pass,
          user_email: user_email,
          uuid: uuid,
          push_key: push_key,
        },
        { "Access-Control-Allow-Origin": "*" }
      );
      console.log("로그인 확인", response.data);
      return response.data;
    } catch (error) {
      console.log("CARDEALER_API_GET_TOKEN", error);
      return error.response.data;
    }
  };
}
