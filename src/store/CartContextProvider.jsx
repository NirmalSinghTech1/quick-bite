import { createContext, useReducer } from "react";

const CartContext = createContext({
  cartItems: [],
  addMealToCart: () => {},
  removeMeal: () => {},
  clearCart: () => {},
  totalAmount: 0,
});

function cartReducer(state, action) {
  if (action.type === "ADD_MEAL") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.meal?.id,
    );

    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.meal, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_MEAL") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    );

    let updatedItems = [...state.items];

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cartItems, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addMealToCart(meal) {
    dispatchCartAction({
      type: "ADD_MEAL",
      meal,
    });
  }

  function removeQuantity(id) {
    dispatchCartAction({
      type: "REMOVE_MEAL",
      id,
    });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const totalAmount = cartItems.items.reduce((totalAmount, item) => {
    return totalAmount + item.price * item.quantity;
  }, 0);

  const cartCtx = {
    cartItems: cartItems.items,
    addMealToCart,
    removeMeal: removeQuantity,
    clearCart: clearCart,
    totalAmount: totalAmount,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
}

export default CartContext;
