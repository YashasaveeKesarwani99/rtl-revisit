import { useState } from "react";

export const useCounter = ({ initialCount = 0 }: { initialCount?: number }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((c) => ++c);
  const decrement = () => setCount((c) => --c);

  return {
    count,
    increment,
    decrement,
  };
};
