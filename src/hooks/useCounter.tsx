import { useState } from "react";

export const useCounter = (stock: number) => {
  const [quantity, setQuantity] = useState(1);

  const add = () => {
    if (quantity >= stock) return;
    setQuantity(quantity + 1);
  };

  const remove = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };
  const reset = () => {
    setQuantity(50);
  };

  return {
    quantity,
    add,
    remove,
    reset,
  };
};