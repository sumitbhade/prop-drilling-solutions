import { createContext } from "react";

export const CartContext = createContext({
  // For autocompletion purpose (when destructuring )
  items: [],
  addItemToCart: () => {},
});
