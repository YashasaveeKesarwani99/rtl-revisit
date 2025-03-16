import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("text input is inside the component", () => {
    render(<Application />);

    let pageHeading = screen.getByRole("heading", {
      level: 1,
      name: "Job application form",
    });
    expect(pageHeading).toBeInTheDocument();

    let sectionHeading = screen.getByRole("heading", {
      level: 2,
      name: "Section 1",
    });
    expect(sectionHeading).toBeInTheDocument();

    let textElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(textElement).toBeInTheDocument();

    let textAreaElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(textAreaElement).toBeInTheDocument();

    let selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    let checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    let buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
