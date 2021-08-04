import React from "react";

export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [search, setSearch] = React.useState("");

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
