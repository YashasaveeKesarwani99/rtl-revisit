import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../providers/app-providers";

describe("MuiMode", () => {
  test("component renders", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
