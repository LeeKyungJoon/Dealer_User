import React, { useState } from "react";
import InfoContext from "../context/InfoContext";

const InfoProvider = ({ children }) => {
  const setUserState = (userInfo) => {
    setState((prevState) => {
      return {
        ...prevState,
        info: userInfo,
      };
    });
  };

  const initialState = {
    info: {
      profile_img_url: "",
      push_agree_yn: false,
      user_email: "",
      user_nm: "",
      user_no: 0,
      user_phone: "",
    },
  };

  const [state, setState] = useState(initialState);

  return (
    <InfoContext.Provider value={{ state, setUserState }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;
