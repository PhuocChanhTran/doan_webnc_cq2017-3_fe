import React from "react";

export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [search, setSearch] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [changeCart, setChangeCart] = React.useState(false);
  const [changeWish, setChangeWish] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        message,
        setMessage,
        changeWish,
        setChangeWish,
        changeCart,
        setChangeCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
