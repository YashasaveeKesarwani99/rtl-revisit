/**
 * this test should pass if any greeting passed should render on the screen otherwise the common greet text 'hello'
 * should render
 */

import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("greet renders correctly", () => {
    render(<Greet />);
    let helloElement = screen.getByText(/hello/i);

    expect(helloElement).toBeInTheDocument();
  });

  test("greet renders with the given name", () => {
    render(<Greet personName="yashasavee" />);

    let greetEle = screen.getByText(/hello yashasavee/i);

    expect(greetEle).toBeInTheDocument();
  });
});
