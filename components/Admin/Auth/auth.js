import axios from "axios";
const SEVER_URL = "http://localhost/react_api";
const login = async (data) => {
  const LOGIN_ENDPOINt = `${SEVER_URL}/login.php`;
  try {
    let response = await axios.post(LOGIN_ENDPOINt, data);
    if (response.data.jwt) {
      localStorage.setItem("access_token", response.data.jwt);
      localStorage.setItem("userdata", response.data.datas);
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
    console.log(e);
  }
};
const register = async (data) => {
  const SIGNUP_ENDPOINT = `${SEVER_URL}/register.php`;
  try {
    let response = await axios({
      method: "post",
      responseType: "json",
      url: SIGNUP_ENDPOINT,
      data: data,
    });
  } catch (e) {
    console.log(e);
  }
};
const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("userdata");
};
export { login, register, logout };
