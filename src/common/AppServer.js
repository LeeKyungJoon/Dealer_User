import Http from './Http';
import { sha256 } from 'react-native-sha256';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'underscore';
import fs from 'react-native-fs';
import ImgToBase64 from 'react-native-image-base64';
import FormData from 'form-data';
import Constants from './Constants';
import axios from 'axios';

export default class AppServer {
  //이메일 중복체크
  static CARDEALER_API_00007 = async (user_email) => {
    console.log('이메일 중복체크 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00007',
        {
          params: {
            user_email: user_email,
          },
        },
        { 'Access-Control-Allow-Origin': '*' },
      );
      console.log('이메일 중복체크 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00007', error);
      return error.response.data;
    }
  };

  //휴대폰 인증
  static CARDEALER_API_00006 = async ({ user_phone, phone_gb, user_type }) => {
    console.log('휴대폰 인증 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00006',
        {
          user_phone: user_phone,
          phone_gb: phone_gb,
          user_type: user_type,
        },
        { 'Access-Control-Allow-Origin': '*' },
      );
      console.log('휴대폰 인증 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00006', error);
      return error.response.data;
    }
  };

  //휴대폰 인증체크
  static CARDEALER_API_00006_2 = async ({ user_phone, phone_conf_number }) => {
    console.log('휴대폰 인증체크 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00006_2',
        {
          user_phone: user_phone,
          phone_conf_number: phone_conf_number,
        },
        { 'Access-Control-Allow-Origin': '*' },
      );
      console.log('휴대폰 인증체크 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00006_2', error);
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
    let hash = await sha256(user_pass);

    console.log('>>>>>>>>>>>>>>>>>>> hash : ' + hash);
    console.log('회원가입 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00005',
        {
          user_nm: user_nm,
          user_email: user_email,
          user_phone: user_phone,
          phone_conf_number: phone_conf_number,
          user_pass: hash,
          social_yn: social_yn,
          social_type: social_type,
          push_key: push_key,
          update_page_yn: update_page_yn,
        },
        { 'Access-Control-Allow-Origin': '*' },
      );
      console.log('회원가입 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00005', error);
      return error.response.data;
    }
  };

  //비밀번호 찾기
  static CARDEALER_API_00008 = async ({ phone_conf_number, user_phone }) => {
    console.log('비밀번호 찾기 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00008',
        {
          phone_conf_number: phone_conf_number,
          user_phone: user_phone,
        },
        { 'Access-Control-Allow-Origin': '*' },
      );
      console.log('비밀번호 찾기 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00008', error);
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
    console.log('로그인 응답');
    let hash = await sha256(user_pass);
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_GET_TOKEN',
        {
          user_pass: hash,
          user_email: user_email,
          uuid: uuid,
          push_key: push_key,
        },
        { 'Access-Control-Allow-Origin': '*' },
      );
      console.log('로그인 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_GET_TOKEN', error);
      return error.response.data;
    }
  };

  //비밀번호 변경
  static CARDEALER_API_00009 = async ({ user_pass, user_pass_new }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('비밀번호 변경 응답');
    let hash = await sha256(user_pass);
    let hash1 = await sha256(user_pass_new);
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00009',
        {
          user_pass: hash,
          user_pass_new: hash1,
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('비밀번호 변경 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00009', error);
      return error.response.data;
    }
  };

  //휴대전화 변경
  static CARDEALER_API_00010 = async ({ user_phone, phone_conf_number }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('휴대전화 변경 응답');

    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00010',
        {
          user_phone: user_phone,
          phone_conf_number: phone_conf_number,
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('휴대전화 변경 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00010', error);
      return error.response.data;
    }
  };

  //로그아웃
  static CARDEALER_API_00003 = async () => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('로그아웃 응답');

    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00003',
        {},
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('로그아웃 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00003', error);
      return error.response.data;
    }
  };

  //알림 변경
  static CARDEALER_API_00011 = async ({ push_agree_yn }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('알림 변경 응답');

    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00011',
        {
          push_agree_yn: push_agree_yn,
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('알림 변경 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00011', error);
      return error.response.data;
    }
  };

  //공지사항 목록
  static CARDEALER_API_00013 = async ({ page, range }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('공지사항 목록 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00013',
        {
          params: {
            page: page,
            range: range,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('공지사항 목록 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00013', error);
      return error.response.data;
    }
  };

  //공지사항 상세내용
  static CARDEALER_API_00014 = async ({ notice_no }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('공지사항 상세내용 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00014',
        {
          params: {
            notice_no: notice_no,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('공지사항 상세내용 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00014', error);
      return error.response.data;
    }
  };

  //프로필 이미지 변경
  static CARDEALER_API_00012 = async ({ responsedata }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('프로필 이미지 변경 응답', responsedata.uri);

    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00012',
        responsedata,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            authorization: _token,
            //'content-type': 'multipart/form-data',
            //Accept: 'application/json',
            'Content-Type': 'multipart/form-data;',
          },
        },
      );
      console.log('프로필 이미지 변경 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00012', error);
      console.log('2');
      return error.response.data;
    }
  };

  //임시 이미지 업로드용
  static FILE_UPLOAD = async (path) => {
    const _token = await AsyncStorage.getItem('_token');
    const formData = new FormData();
    formData.append('files', {
      uri: Platform.OS === 'android' ? `file:///${path}` : path,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    axios({
      url: Constants.SERVER_API + '/cardealer/CARDEALER_API_00012',
      method: 'POST',
      data: formData,
      headers: {
        Accept: 'application/json',
        authorization: _token,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(function (response) {
        console.log('*****handle success******');
        console.log(response.data);
      })
      .catch(function (response) {
        console.log('*****handle failure******');
        console.log(response);
      });
  };

  //내차구매 메인 리스트
  static CARDEALER_API_00015 = async ({ premium_yn, premium_yn_other }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);
    console.log(premium_yn, premium_yn_other);
    console.log('내차구매 메인 리스트 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00015',
        {
          params: {
            premium_yn: premium_yn,
            premium_yn_other: premium_yn_other,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('내차구매 메인 리스트 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00015', error);
      return error.response.data;
    }
  };

  //브랜드 카테고리 목록
  static CARDEALER_API_00016 = async () => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('브랜드 카테고리 목록 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00016',
        {},
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('브랜드 카테고리 목록 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00016', error);
      return error.response.data;
    }
  };

  //차량 검색
  static CARDEALER_API_00017 = async ({
    search_text,
    premium_yn,
    user_type,
    page,
    range,
  }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('차량 검색 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00017',
        {
          params: {
            search_text: search_text,
            premium_yn: premium_yn,
            user_type: user_type,
            page: page,
            range: range,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('차량 검색 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00017', error);
      return error.response.data;
    }
  };

  //검색 이력
  static CARDEALER_API_00019 = async ({ user_type }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('검색 이력 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00019',
        {
          params: {
            user_type: user_type,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('검색 이력 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00019', error);
      return error.response.data;
    }
  };

  //검색 삭제
  static CARDEALER_API_00021 = async ({ search_no }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('검색 삭제 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00021',
        {
          search_no: search_no,
        },
        { 'Access-Control-Allow-Origin': '*' },
      );
      console.log('검색 삭제 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00021', error);
      return error.response.data;
    }
  };

  //국산, 수입 상세 리스트
  static CARDEALER_API_00018 = async ({
    data_type,
    premium_yn,
    page,
    range,
  }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('국산, 수입 상세 리스트 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00018',
        {
          params: {
            data_type: data_type,
            premium_yn: premium_yn,
            page: page,
            range: range,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('국산, 수입 상세 리스트 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00018', error);
      return error.response.data;
    }
  };

  //차량 상세보기
  static CARDEALER_API_00022 = async ({ car_no, car_user_type }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('차량 상세보기 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00022',
        {
          params: {
            car_no: car_no,
            car_user_type: car_user_type,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('차량 상세보기 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00022', error);
      return error.response.data;
    }
  };

  //성능점검
  static CARDEALER_API_00025 = async ({ car_no, car_user_type }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('성능점검 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00025',
        {
          params: {
            car_no: car_no,
            car_user_type: car_user_type,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('성능점검 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00025', error);
      return error.response.data;
    }
  };

  //보험이력
  static CARDEALER_API_00026 = async ({ car_no, car_user_type }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('보험이력 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00026',
        {
          params: {
            car_no: car_no,
            car_user_type: car_user_type,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('보험이력 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00026', error);
      return error.response.data;
    }
  };

  //총 구매비용 계산
  static CARDEALER_API_00027 = async ({ car_no, car_user_type }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('총 구매비용 계산 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00027',
        {
          params: {
            car_no: car_no,
            car_user_type: car_user_type,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('총 구매비용 계산 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00027', error);
      return error.response.data;
    }
  };

  //찜하기
  static CARDEALER_API_00032 = async ({ car_no, like_type, like_yn }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('찜하기 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00032',
        {
          car_no: car_no,
          like_type: like_type,
          like_yn: like_yn,
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('찜하기 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00032', error);
      return error.response.data;
    }
  };

  //배송료 계산
  static CARDEALER_API_00023 = async ({
    car_no,
    car_user_type,
    delivery_method,
    address,
    address_detail,
  }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('배송료 계산 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00023',
        {
          params: {
            car_no: car_no,
            car_user_type: car_user_type,
            delivery_method: delivery_method,
            address: address,
            address_detail: address_detail,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('배송료 계산 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00023', error);
      return error.response.data;
    }
  };

  //차량 신고하기
  static CARDEALER_API_00024 = async ({ car_no, car_user_type, reason }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('차량 신고하기 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00024',
        {
          car_no: car_no,
          car_user_type: car_user_type,
          reason: reason,
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('차량 신고하기 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00024', error);
      return error.response.data;
    }
  };

  //딜러 상세정보
  static CARDEALER_API_00028 = async ({ dealer_no }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('딜러 상세정보 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00028',
        {
          params: {
            dealer_no: dealer_no,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('딜러 상세정보 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00028', error);
      return error.response.data;
    }
  };

  //후기 전체보기
  static CARDEALER_API_00028_2 = async ({ dealer_no, page, range }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('후기 전체보기 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00028_2',
        {
          params: {
            dealer_no: dealer_no,
            page: page,
            range: range,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('후기 전체보기 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00028_2', error);
      return error.response.data;
    }
  };

  //딜러 차량 전체보기
  static CARDEALER_API_00028_3 = async ({
    dealer_no,
    premium_yn,
    page,
    range,
  }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('딜러 차량 전체보기 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00028_3',
        {
          params: {
            dealer_no: dealer_no,
            premium_yn: premium_yn,
            page: page,
            range: range,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('딜러 차량 전체보기 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00028_3', error);
      return error.response.data;
    }
  };

  //리얼후기 리스트
  static CARDEALER_API_00049 = async ({ review_type, page, range }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('리얼후기 리스트 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00049',
        {
          params: {
            review_type: review_type,
            page: page,
            range: range,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('리얼후기 리스트 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00049', error);
      return error.response.data;
    }
  };

  //리얼후기 상세
  static CARDEALER_API_00020 = async ({ review_no }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('리얼후기 상세 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00020',
        {
          params: {
            review_no: review_no,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('리얼후기 상세 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00020', error);
      return error.response.data;
    }
  };

  //차량 구매정보 조회
  static CARDEALER_API_00029 = async () => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('차량 구매정보 조회 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00029',
        {},
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('차량 구매정보 조회 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00029', error);
      return error.response.data;
    }
  };

  //차량 구매정보 선택
  static CARDEALER_API_00030 = async ({ car_no, car_user_type, buy_type }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('차량 구매정보 선택 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00030',
        {
          car_no: car_no,
          car_user_type: car_user_type,
          buy_type: buy_type,
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('차량 구매정보 선택 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00030', error);
      return error.response.data;
    }
  };

  //차량 판매동의 요청
  static CARDEALER_API_00031 = async ({
    car_no,
    car_user_type,
    birth_dt,
    gender,
  }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('차량 판매동의 요청 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00031',
        {
          car_no: car_no,
          car_user_type: car_user_type,
          birth_dt: birth_dt,
          gender: gender,
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('차량 판매동의 요청 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00031', error);
      return error.response.data;
    }
  };

  //차량 구매 진행단계 조회
  static CARDEALER_API_00033 = async ({ car_no }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('차량 구매 진행단계 조회 응답');
    try {
      let response = await Http.get(
        '/cardealer/CARDEALER_API_00033',
        {
          params: {
            car_no: car_no,
          },
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('차량 구매 진행단계 조회 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00033', error);
      return error.response.data;
    }
  };

  //차량구매 입금계좌 요청
  static CARDEALER_API_00034 = async ({ trade_no }) => {
    const _token = await AsyncStorage.getItem('_token');
    Http.defaults.headers.common['Authorization'] = _token;

    console.log('>>>>>>>>>>>_token', _token);

    console.log('차량구매 입금계좌 요청 응답');
    try {
      let response = await Http.post(
        '/cardealer/CARDEALER_API_00034',
        {
          trade_no: trade_no,
        },
        { 'Access-Control-Allow-Origin': '*', authorization: _token },
      );
      console.log('차량구매 입금계좌 요청 확인', response.data);
      return response.data;
    } catch (error) {
      console.log('CARDEALER_API_00034', error);
      return error.response.data;
    }
  };
}
