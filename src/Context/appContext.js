import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  let [state, setState] = useState({});

  return (
    <AppContext.Provider
      value={{
        ...state,
        setTheme: (theme) => setState({ ...state, theme }),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
