import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  return useContext(Context);
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </Context.Provider>
  );
};
