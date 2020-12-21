import { createContext, useReducer } from "react";

// App Reducer
import { reducer } from "../reducers/AppReducer";
export const AppContext = createContext();

const initialState = {
  isLogin: false,
  isLoading: true,
  isModalOpen: false,
  modalMessage: null,
  user: [],
  myOrder: [],
  myOffer: [],
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
