import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  let skills: string[] = ["html", "css", "js"];

  test("skills should render", () => {
    render(<Skills skills={skills} />);

    expect(screen.getByText("html")).toBeInTheDocument();
  });

  test("skills should render three items", () => {
    render(<Skills skills={skills} />);

    let skillsItems = screen.getAllByRole("listitem");
    expect(skillsItems).toHaveLength(3);
  });

  test("renders login initially", () => {
    render(<Skills skills={skills} />);

    let startLearningEle = screen.queryByRole("button", {
      name: "Login",
    });
    expect(startLearningEle).toBeInTheDocument();
  });

  test("renders start learning eventually", async () => {
    render(<Skills skills={skills} />);

    let startLearningEle = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 1002,
      }
    );
    expect(startLearningEle).toBeInTheDocument();
  });
});
