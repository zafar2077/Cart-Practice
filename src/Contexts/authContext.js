import React from "react";

const CreateAuthStateContext = React.createContext(undefined);
const CreateAuthDispatchContext = React.createContext(undefined);

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleAuthDataChange = (flag) => {
    setIsLoggedIn(flag);
  };

  return (
    <CreateAuthStateContext.Provider value={isLoggedIn}>
      <CreateAuthDispatchContext.Provider value={handleAuthDataChange}>
        {children}
      </CreateAuthDispatchContext.Provider>
    </CreateAuthStateContext.Provider>
  );
}

const useCreateAuthStateContext = () => {
  const context = React.useContext(CreateAuthStateContext);

  if (context === undefined) {
    throw Error("useAuthContext must be inside AuthProvider");
  }

  return context;
};

const useCreateAuthDispatchContext = () => {
  const context = React.useContext(CreateAuthDispatchContext);

  if (context === undefined) {
    throw Error("useAuthContext must be inside AuthProvider");
  }

  return context;
};

const useAuthContext = () => {
  return [useCreateAuthStateContext(), useCreateAuthDispatchContext()];
};

export {
  AuthProvider,
  useCreateAuthStateContext,
  useCreateAuthDispatchContext,
  useAuthContext,
};
