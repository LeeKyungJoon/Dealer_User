import { createContext } from "react";

const InfoContext = createContext({
  info: {
    profile_img_url: "",
    push_agree_yn: false,
    user_email: "",
    user_nm: "",
    user_no: 0,
    user_phone: "",
  },
  setUserState: () => {},
});

export default InfoContext;
