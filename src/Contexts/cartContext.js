import React from "react";

const CreateCartListStateContext = React.createContext(undefined);
const CreateCartListDispatchContext = React.createContext(undefined);

function CartProvider({ children }) {
  const [cartList, setCartList] = React.useState([]);

  const handleCartListChange = (element) => {
    setCartList((prev) => {
      return [...prev, element];
    });
  };

  const removeCartChange = (element) => {
    setCartList(element);
  };

  return (
    <CreateCartListStateContext.Provider value={cartList}>
      <CreateCartListDispatchContext.Provider
        value={{ handleCartListChange, removeCartChange }}
      >
        {children}
      </CreateCartListDispatchContext.Provider>
    </CreateCartListStateContext.Provider>
  );
}

const useCreateCartListStateContext = () => {
  const context = React.useContext(CreateCartListStateContext);

  if (context === undefined) {
    throw Error("useCartContext must be inside AuthProvider");
  }

  return context;
};

const useCreateCartListDispatchContext = () => {
  const context = React.useContext(CreateCartListDispatchContext);

  if (context === undefined) {
    throw Error("useCartDispatch Context must be inside AuthProvider");
  }

  return context;
};

export {
  CartProvider,
  useCreateCartListStateContext,
  useCreateCartListDispatchContext,
};
