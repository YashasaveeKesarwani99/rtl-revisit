import { renderHook } from "@testing-library/react";
import { useCounter } from "./use-counter";
import { act } from "react";

describe("CounterHook", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));

    expect(result.current.count).toBe(0);
  });

  test("should render 1 when executed increment", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));

    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should render -1 when executed decrement", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));

    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
