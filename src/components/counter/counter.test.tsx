import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("rendering counter component", () => {
    render(<Counter />);

    let incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("render 0 when no event is fired", () => {
    render(<Counter />);

    let zeroEle = screen.getByRole("heading");
    expect(zeroEle).toHaveTextContent("0");
  });

  test("heading value increments after a click to 1", async () => {
    user.setup();
    render(<Counter />);

    let incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    let zeroEle = screen.getByRole("heading");
    expect(zeroEle).toHaveTextContent("0");

    await user.click(incrementButton);
    expect(zeroEle).toHaveTextContent("1");
  });

  // keyboard interactions
  test("renders a count of 10 when clicked on set", async () => {
    user.setup();
    render(<Counter />);

    let heading = screen.getByRole("heading");
    let inputEle = screen.getByRole("spinbutton");
    await user.type(inputEle, "10");
    expect(inputEle).toHaveValue(10);
    let setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    expect(heading).toHaveTextContent("10");
  });
});
