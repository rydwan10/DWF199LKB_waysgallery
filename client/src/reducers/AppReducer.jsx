import {
  LOGIN,
  LOGOUT,
  SET_MODAL,
  REGISTER,
  USER_LOADED,
  AUTH_ERROR,
  SET_LOADING,
  SET_MY_OFFER,
  SET_MY_ORDER,
} from "../constant/ActionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case LOGIN:
      localStorage.setItem("token", action.payload.user.token);
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: { ...action.payload.user },
      };
    case USER_LOADED:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: { ...action.payload.user },
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        user: [],
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        user: [],
        playlist: [],
      };

    case SET_MODAL:
      return {
        ...state,
        isModalOpen: action.payload.isOpen,
        modalMessage: action.payload.message,
      };
    case REGISTER:
      localStorage.setItem("token", action.payload.user.token);
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: { ...action.payload.user },
      };
    case SET_MY_OFFER:
      return {
        ...state,
        myOffer: action.payload,
      };
    case SET_MY_ORDER:
      return {
        ...state,
        myOrder: action.payload,
      };
    default:
      throw new Error("Reaching default in switch case");
  }
};
