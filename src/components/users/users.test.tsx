import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import { server } from "../../mocks/node";
import { rest } from "msw";

describe("Users", () => {
  test("component renders correctly", () => {
    render(<Users />);

    const headingEle = screen.getByRole("heading");
    expect(headingEle).toBeInTheDocument();
  });

  test("renders the response from api", async () => {
    render(<Users />);

    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(2);
  });

  test("renders error message on api fail", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);

    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
