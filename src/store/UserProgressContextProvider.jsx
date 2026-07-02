import { useState, createContext } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");
  console.log(userProgress);
  function showCart() {
    console.log("show cart");
    setUserProgress("cart");
  }

  function hideCart() {
    console.log("hide cart");
    setUserProgress("");
  }

  function showCheckout() {
    console.log("show check");
    setUserProgress("checkout");
  }

  function hideCheckout() {
    console.log("hide check");
    setUserProgress("");
  }

  const userContextCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userContextCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
