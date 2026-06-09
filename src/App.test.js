import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero content", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      name: /building polished web products, workflow systems, and immersive 3d experiences/i,
    })
  ).toBeInTheDocument();
});
