import { useDispatch } from "react-redux";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  // registerSuccess,
  fetchFail,
} from "../features/authSlice";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosPublic, axiosWithToken } = useAxios();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login", userInfo);
      console.log(data);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify(err.response.data);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    console.log("logout bası");
    try {
      console.log("try bası");

      const {data}=await axiosWithToken.post("/auth/logout");
      console.log("try orta");
      console.log(data);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/login");
      console.log("try sonu");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
      console.log(err);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post("/auth/register", userInfo);
      // dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/login");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };

  return {
    login,
    logout,
    register,
  };
};

export default useAuthCalls;
